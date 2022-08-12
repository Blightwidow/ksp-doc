export const list = {
  render: ({ ordered, ...props }) =>
    ordered ? (
      <ol {...props} style={{ listStyle: 'decimal', paddingLeft: '1rem' }}  />
    ) : (
      <ul {...props} style={{ listStyle: 'disc', paddingLeft: '1rem' }} />
    ),
  attributes: {
    ordered: {
      type: Boolean,
    },
  },
}
