/* Essential Packages */
const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');
const { getModule } = require('powercord/webpack');

/* Plugin Specific Packages */
const { name, shorthand } = require('./manifest.json');

/* Settings */
const Settings = require('./Components/Settings.jsx');

module.exports = class ImprovedFolders extends Plugin {
    /* Entry Point */
    async startPlugin() {
        /* Register Settings */
        powercord.api.settings.registerSettings(shorthand, {
            category: this.entityID,
            label: name,
            render: Settings
        });
    }

    pluginWillUnload() {
        powercord.api.settings.unregisterSettings(shorthand);
    }
};
