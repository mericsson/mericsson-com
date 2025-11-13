---
title: Introducing Arkiv - GMail Native Organizer
date: 2022-11-29T12:00:00.000Z
path: /introducing-arkiv-gmail-native-organizer
---

Third time's the charm!

I'm very excited to share my third attempt at a GMail Organizer. My second attempt, launched as [zenbox.co beta](/2017-03-22-zenbox-beta/) worked well but, like any garden, required attention to keep it healthy. Over time it fell into disrepair.

Still, my quest for Inbox Zero continued. When I learned about Google Apps Scripts I was intrigued. Could I write a clone of my previous attempts at a GMail Organizer completely native in GMail with no servers, no external dependencies, no security concerns?

Glad to say that I have done it! Leveraging the [Google Apps Scripts Property Service](https://developers.google.com/apps-script/guides/properties) I was able to persist state on a per-user basis to resemble an allow list, effectively recreating the core data required for my GMail Organizer. When I previously had to manage a node.js express app, React UI, Postgres DB, and a domain is now [180 lines of typescript](https://github.com/mericsson/arkiv/blob/main/arkiv.ts). The Google Apps Script documentation and APIs were a joy to work with and gave me new perspective on developer experience. Overall I'm thrilled with the result and already have one user (outside of myself) happy with their newly organized GMail. :)

Please check out https://github.com/mericsson/arkiv to learn more. Thanks!
