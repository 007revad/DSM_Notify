Ext.namespace("SYNO.SDS.dsm_notify");
Ext.define("SYNO.SDS._ThirdParty.App.dsm_notify", {
    extend: "SYNO.SDS.AppInstance",
    appWindowName: "SYNO.SDS.dsm_notify.MainWindow",
    constructor: function() {
        this.callParent(arguments);
    }
});
Ext.define("SYNO.SDS.dsm_notify.MainWindow", {
    extend: "SYNO.SDS.AppWindow",
    constructor: function(a) {
        this.appInstance = a.appInstance;
        SYNO.SDS.dsm_notify.MainWindow.superclass.constructor.call(this, Ext.apply({
            layout: "fit",
            resizable: false,
            cls: "syno-app-win",
            maximizable: false,
            minimizable: true,
            showHelp: false,
            width: 600,
            height: 400,
            html: '<div style="font-family:Arial,sans-serif;font-size:13px;padding:20px;color:#333;"><h2 style="margin-top:0;">DSM Notify</h2><br><p>This package provides DSM notification strings for 007revad scheduled scripts.</p><br><p>It has no user interface, apart from this message. Its purpose is to allow scripts to send localised DSM desktop notifications using <code>synodsmnotify</code>.</p><br><p>Do not stop this package. Notifications will not work if it is stopped.</p><br><p><a href="https://github.com/007revad/DSM_Notify" target="_blank">GitHub: 007revad/DSM_Notify</a></p></div>'
        }, a));
    },
    onClose: function() {
        SYNO.SDS.dsm_notify.MainWindow.superclass.onClose.apply(this, arguments);
        this.doClose();
        return true;
    }
});