const fs = require('fs').promises
const path = require('path')
const markdoc = require('@markdoc/markdoc')
const yaml = require('js-yaml')
const lunr = require('lunr')

async function getFiles(pathString) {
  const dirEntities = await fs.readdir(pathString, { withFileTypes: true })
  const files = await Promise.all(
    dirEntities.map((entity) => {
      const res = path.resolve(pathString, entity.name)
      return entity.isDirectory() ? getFiles(res) : res
    })
  )
  return Array.prototype.concat(...files)
}

async function postData() {
  const directory = path.join(process.cwd(), 'pages')
  const fileNames = await getFiles(directory)
  const pages = await Promise.all(
    fileNames
      .filter((fileName) => !fileName.includes('_'))
      .map(async (fileName) => {
        const id = fileName.replace(/\.md$/, '').replace(/^.+\/pages/, '')
        const fileContents = await fs.readFile(fileName, 'utf8')
        const parsedContent = markdoc.parse(fileContents)
        return {
          id,
          title: yaml.load(parsedContent.attributes.frontmatter).title,
          body: fileContents,
        }
      })
  )

  var index = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    pages.forEach(function (doc) {
      this.add(doc)
    }, this)
  })

  return {
    index: JSON.stringify(index),
    pages: `export const pages = ${JSON.stringify(
      pages.reduce(
        (acc, page) => ({
          ...acc,
          [page.id]: {
            id: page.id,
            title: page.title,
          },
        }),
        {}
      )
    )}`,
  }
}

async function main() {
  const cacheData = await postData()
  await fs.writeFile('public/searchIndex.json', cacheData.index)
  await fs.writeFile('public/searchMatch.js', cacheData.pages)
}

main()
