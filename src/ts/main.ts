/// <reference path="./typings/tsd.d.ts" />

// Events
import {TabEvents} from "./events/tab";
import {WidgetEvents} from "./events/widget";
import {WidgetInstanceEvents} from "./events/widget_instance";
import {RosEvents} from "./events/ros";
import {WorkspaceEvents} from "./events/workspace";

// Super
import {lightbox} from "./super/lightbox";
import {storage} from "./super/storage";
import {Frontend} from "./super/frontend";

// Models
import {Widget} from "./model/widget";
import {Workspace} from "./model/workspace";
import {currentWorkspace} from "./model/workspace";

function init() {
  $(document).ready(function () {
    var ros: ROSLIB.Ros = new ROSLIB.Ros("");
    window["ros"] = ros;
    events(ros);
    lightbox.CreateLightbox();
    currentWorkspace.initWorkspace();
    
  });
}

function events(ros: ROSLIB.Ros): void {
  let tabEvents: TabEvents = new TabEvents();
  let widgetEvents: WidgetEvents = new WidgetEvents(ros);
  let widgetInstanceEvents: WidgetInstanceEvents = new WidgetInstanceEvents(ros);
  let rosEvents: RosEvents = new RosEvents(ros);
  let workspace: WorkspaceEvents = new WorkspaceEvents();

  rosEvents.Connect();
}

init();

