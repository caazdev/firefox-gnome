/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

var Tweaks = {
    /*
    exampleTweak: {
        key: "example-tweak",
        enable: function() {
            // do something...
        },
        disable: function() {
            // do something...
        },
    },
    */

    e10sDisableUnderline: {
        key: "e10s-disable-underline",
        type: "stylesheet"
    },

    tabBoldLabel: {
        key: "tab-bold-label",
        type: "stylesheet"
    },

    tabMaxWidth: {
        key: "tab-max-width",
        type: "attribute",
        elements: ["tabbrowser-tabs"],
        attributeName: "tabmaxwidth",
        attributeValue: function() {
            switch (GNOMEThemeTweak.prefs.getIntPref(this.key)) {
                case 1:
                    return "small";
                case 2:
                    return "normal";
                case 3:
                    return "large";
                case 4:
                    return "stretch";
                default:
                    return "default";
            }
        }
    },

    tabsOnTop: {
        key: "tabs-on-top",
        type: "attribute",
        elements: ["navigator-toolbox", "nav-bar", "TabsToolbar"],
        attributeName: "tabsontop"
    },

    urlbarHistoryDropmarker: {
        key: "urlbar-history-dropmarker",
        type: "attribute",
        elements: ["urlbar"],
        attributeName: "hidehistorydropmarker"
    },

    inactiveState: {
        key: "inactive-state",
        type: "stylesheet"
    },

    reliefButtons: {
        key: "relief-buttons",
        type: "attribute",
        elements: ["nav-bar", "bookmarked-notification-anchor"],
        attributeName: "reliefbuttons"
    },
}
