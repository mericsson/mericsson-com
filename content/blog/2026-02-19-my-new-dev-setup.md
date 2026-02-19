---
title: Building Agents with Claude via Mobile
date: 2026-02-19T12:00:00.000Z
path: /developing-on-a-droplet-with-claude-via-iphone/
---

I've been running a new development setup for a few weeks now and it's changed how I think about what a "dev environment" even needs to be.

The setup: a Digital Ocean droplet, the [pi agent framework](https://github.com/badlogic/pi-mono), and Claude Code on my iPhone via the [Moshi](https://apps.apple.com/us/app/moshi-voice-assistant/id6449892695) app. That's it. No laptop required.

## The Droplet

A small Digital Ocean droplet is the foundation. It's always on, always networked, and — crucially — it's where all the actual compute happens. I've moved away from thinking of a VPS as a place to host an app and toward thinking of it as a persistent, programmable environment I can reach from anywhere.

The key addition is the [pi-mono](https://github.com/badlogic/pi-mono) AI agent toolkit, which runs as a systemd service on the droplet. Pi is an LLM-powered coding agent — think Claude Code but self-hosted. It can read and write files, run shell commands, and be extended with custom TypeScript. It starts on boot and stays alive in the background, ready to take work.

## Developing via Claude on iPhone

This is the part that still surprises me a little. My primary interface for working with this setup is Claude Code, accessed through the Moshi iPhone app. I describe what I want — a new agent behavior, a config change, a debugging session — and Claude handles the implementation against the droplet.

It's a fundamentally different rhythm than sitting at a desk. I can pick up a thread of work from anywhere, iterate in short bursts, and put it down without losing context. The feedback loop is fast enough that it doesn't feel like a compromise; it feels like a genuinely capable mobile dev environment.

## Building Agents on Pi

The most interesting part of this setup is how easy pi makes it to build and deploy new agents. Extensions are single TypeScript files dropped into `~/.pi/agent/extensions/`. Pi loads them automatically on startup — no build step, no deploy pipeline.

As a hello world, I built a Telegram news agent. It listens for a `/news` command, curls RSS feeds from BBC, Reuters, and Hacker News, summarizes the top stories via LLM, and replies to Telegram. The whole thing is maybe 100 lines of TypeScript. Getting it running took one session from my phone.

That's the point — the scaffolding for building and deploying agents is almost zero. The interesting part is what you actually build with them, and I'm just getting started.

## What's Next

The immediate unlock this setup gives me is iteration speed. I can build, test, and ship small agents without ever opening a laptop. The Telegram bot was proof-of-concept. The real work is figuring out what useful, persistent agents actually look like — agents that run in the background, do real work, and surface results when I need them.

More on that as it develops.
