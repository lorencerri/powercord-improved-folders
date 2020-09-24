/* Essential Packages */
const { React } = require('powercord/webpack');

/* Plugin Specific Packages */
const { SwitchItem } = require('powercord/components/settings');

module.exports = class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.getSetting = props.getSetting;
        this.toggleSetting = props.toggleSetting;
    }

    render() {
        return <div></div>;
    }
};
