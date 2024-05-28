# Hubs Add-On Template
This is a template to help when developing add-ons for [Hubs](https://github.com/mozilla/hubs/).

As of now add-ons are not yet part of the main Hubs branch, so you'll need to use the Hubs client [add-ons branch](https://github.com/mozilla/hubs/tree/addons) and install this add-on on it.

## Install

1. Install the node-module:

```npm i https://github.com/MozillaReality/hubs-template-addon.git```

2. Add the add-on to your Hubs client add-ons configuration file.

`addons.json`
```
{
  "addons": [
    ...
    "hubs-template-addon", 
    ...
  ]
}

```
3. Create room in your Hubs instance.
4. Enable the add-on in the room configuration.
