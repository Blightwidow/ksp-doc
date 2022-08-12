---
title: Differences with the base game
description: Differences between RP-1 and the base KSP game
date: 09/09/2022
---

# Differences with the base game

KSP had a lot of simplifications in order to allow the player to explore the game without having to
consider to much factor at once. RO reintroduces those concepts and as such you will have to
consider some differences:

## Rocket engines can throttle and restart as much as you want

Unfortunately that's not true. Nearly all rocket engines have a finite amount of restart that are
now simulated in game.

This is important when designing a mission as a single start engine will make transfering a payload
to the Moon near-impossible. It will be way easier to either have a second engine or use an engine
that support multiple restart.

The same issue is also found with throttling. Most engines are not able to throttle at all. This can
be an issue when trying to land. As such landing should prioritize using a deep-throttling engine
(the Lunar Lander used the LDME that could throttle down to 10%).

Another issue that might arise is the G-Force applied to some craft or crew members. You don't want
to suddenly apply too much force on your crew. As such, the most common way to do so on
non-throttling engine is to just shut them off early.

## A high power rocket is better

In KSP, having a rocket with too much engine is not always an issue. Their ability to steer usually
allow to still have a proper flight.

In RO, not only will this be way harder, but counter-productive. The high atmospheric forces and low
control authority on your ship will make most high TWR rocket break or very hard to steer on
target. In reality most rocket design target a TWR of around 1.4 on ascent. They then use a smaller
TWR for upper stages as these engines have usually better ISP (efficiency).

## I can ascend from the surface by doing a gravity assist, and then circularizing at apoapsis

As we saw earlier, restarting an engine is very complicated. Most engine powerful enough to lift the
first stage of a rocket are not restartable.

Add in the fact that most rocket burn for a long time (Earth require 3 times more delta-V than
Kerbin to reach orbit), and it is not only inefficient but impossible with most low TWR engines.

The solution is then to angle your trajectory to do only one burn (with some math
like [PEG](https://www.orbiterwiki.org/wiki/Powered_Explicit_Guidance)). In order to that, we will
mostly use a tool called MechJeb, that will handle this for us.

## Rockets use only 2 types of fuel: Solid and Liquid

Unfortunately no. There is a large array of fuel types to chose from. Some will be denser, allowing
you to pack more punch in a smaller rocket (Kerolox is 1/2.84 as dense as Hydrolox, but less
efficient). Some will boil without special measures. Some are toxic.

While RP-1 ignore toxicity, it will simulate both boil-off and density. As such we will need to
chose our fuel depending on the mission we have in mind.

You can learn more about fuel in our [dedicated page](/en/science/fuel).

## A rocket is very easy to stir thanks to Reaction wheels

In reality, reaction wheels are only used for very small adjustment and require some complex
operating. In RP-1, you will not be able to steer thanks to them. If you have a spacecraft with no
gimble or RCS to orient itself, it will be dead weight in the sky.

## A heatshield allow me to land on any planet from any speed

Sadly no. Heatshield are usually rated for a maximum speed. A LEO (Low Earth Orbit) heatshield will
bot survive a rentry from a high orbit or the moon.

This also means that coming in really fast and aerobraking through the atmosphere won't be possible
with most heatshields.

You also have to be careful of reentry profile. The early heatshields usually were designed to
survive short but intense reentry. Your craft will only survive if you have a negative periapsis.
But then heatshields started to be designed to prefer shallow reentries (Mercury, Sample return
capsule). As such a perigee of 30km to 40km is great window to target.

## Want to dig deeper ?

If you want a detailted explanation on those, you can either read our [science section](/en/science)
or check the more detailed list from
[RO github wiki](https://github.com/KSP-RO/RealismOverhaul/wiki/False-KSP-Lessons)
