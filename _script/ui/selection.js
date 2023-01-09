import Brush from "./brush.js";
import EventBus from "../util/eventbus.js";
import {COMMAND, EVENT} from "../enum.js";

let Selection = function(){
    let me = {};
    let currentSelection;
    
    me.set = function(canvas,selection){
        console.error(selection);
        currentSelection = {
            left: selection.left,
            top: selection.top,
            width: selection.width,
            height: selection.height,
            canvas:  canvas.getCanvas()
        }
    }

    me.move = function(x,y,w,h){
        if (currentSelection){
            currentSelection.left = x;
            currentSelection.top = y;
            currentSelection.width = w;
            currentSelection.height = h;
            EventBus.trigger(EVENT.selectionChanged);
        }
    }

    me.get = function(){
        return currentSelection;
    }

    me.toStamp = function(){
        if (currentSelection){
            let brushCanvas = document.createElement("canvas");
            brushCanvas.width = currentSelection.width;
            brushCanvas.height = currentSelection.height;
            brushCanvas.getContext("2d").drawImage(currentSelection.canvas,currentSelection.left,currentSelection.top,brushCanvas.width,brushCanvas.height,0,0, brushCanvas.width, brushCanvas.height);
            Brush.set("canvas",brushCanvas);
            EventBus.trigger(COMMAND.DRAW);
            EventBus.trigger(COMMAND.CLEARSELECTION);
        }
    }
    
    me.toLayer = function(){
        
    }

    EventBus.on(COMMAND.CLEARSELECTION,()=>{
        currentSelection = undefined;
    })

    EventBus.on(COMMAND.STAMP,()=>{
        me.toStamp();
    })
    
    return me;
}()

export default Selection