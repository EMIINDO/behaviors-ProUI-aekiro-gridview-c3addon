//Converted with C2C3AddonConverter v1.0.1.1
"use strict";
// Porting BY EMI INDO with c3addon-ide-plus

{
    const SDK = globalThis.SDK;
    const lang = self.lang;
    const BEHAVIOR_ID = "aekiro_gridView";
    // callMap Deprecated const PLUGIN_VERSION = "1.822";
    const BEHAVIOR_CATEGORY = "other";
    const BEHAVIOR_CLASS = SDK.Behaviors.aekiro_gridView = class aekiro_gridView extends SDK.IBehaviorBase {
        constructor() {
            super(BEHAVIOR_ID);
            SDK.Lang.PushContext("behaviors." + BEHAVIOR_ID.toLowerCase());
            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(BEHAVIOR_VERSION);
            this._info.SetCategory(BEHAVIOR_CATEGORY);
            this._info.SetAuthor("Aekiro");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsOnlyOneAllowed(true);

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");
            this._info.SetProperties([
                new SDK.PluginProperty("text", "item-name", ""),
                new SDK.PluginProperty("integer", "max-columns", 0),
                new SDK.PluginProperty("integer", "max-rows", 0),
                new SDK.PluginProperty("integer", "vertical-spacing", 0),
                new SDK.PluginProperty("integer", "horizontal-spacing", 0),
                new SDK.PluginProperty("integer", "vertical-padding", 0),
                new SDK.PluginProperty("integer", "horizontal-padding", 0)
            ]);
            SDK.Lang.PopContext();		// .properties
            SDK.Lang.PopContext();
        }
    };
    BEHAVIOR_CLASS.Register(BEHAVIOR_ID, BEHAVIOR_CLASS);
}
