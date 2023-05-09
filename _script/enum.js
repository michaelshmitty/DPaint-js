export let COMMAND={
    NEW: 1001,
    OPEN: 1002,
    LINE:1003,
    SQUARE:1004,
    ZOOMIN:1005,
    ZOOMOUT:1006,
    SELECT: 1007,
    DRAW:1008,
    SPLITSCREEN: 1009,
    UNDO: 1010,
    REDO: 1011,
    STAMP: 1012,
    TOLAYER: 1013,
    CLEARSELECTION: 1014,
    ERASEELECTION: 1015,
    NEWLAYER: 1016,
    SAVE: 1017,
    PALETTEFROMIMAGE: 1018,
    PALETTEREDUCE: 1019,
    ROTATE: 1020,
    CLEAR: 1021,
    CROP: 1022,
    INFO: 1023,
    ERASE: 1024,
    DELETELAYER: 1025,
    CIRCLE: 1026,
    TRIM: 1027,
    TRANSFORMLAYER: 1028,
    ADDFRAME: 1029,
    DELETEFRAME: 1030,
    IMPORTFRAME: 1031,
    RESIZE: 1032,
    RESAMPLE: 1033,
    EFFECTS: 1034,
    GRADIENT: 1035,
    DUPLICATELAYER: 1036,
    COLORMASK: 1037,
    EDITPALETTE: 1038,
    MERGEDOWN: 1039,
    FLATTEN: 1040,
    LAYERUP: 1041,
    LAYERDOWN: 1042,
    SAVEPALETTE: 1043,
    LOADPALETTE: 1044,
    LAYERMASK: 1045,
    LAYERMASKHIDE: 1046,
    DELETELAYERMASK: 1047,
    APPLYLAYERMASK: 1048,
    POLYGONSELECT: 1049,
    ENDPOLYGONSELECT: 1050,
    TOSELECTION: 1051,
    CUTTOLAYER: 1052,
    SWAPCOLORS: 1053,
    ABOUT: 1054,
    FLOODSELECT: 1055,
    FLOOD: 1056,
    SELECTALL: 1057,
    COPY: 1058,
    PASTE: 1059,
    FULLSCREEN: 1060,
    PAN: 1061,
    COLORPICKER: 1062,
    TOGGLEPALETTES: 1063,
    ADF: 1064,
    DELUXE: 1065,
    SAVEDISK: 1066,
    SAVEGENERIC: 1067,
    SAVEFILETOADF: 1068,
    DUPLICATEFRAME: 1069,
    SMUDGE: 1070,
}

export let EVENT={
    drawColorChanged:1,
    backgroundColorChanged: 2,
    drawCanvasOverlay: 3,
    hideCanvasOverlay: 4,
    imageContentChanged: 5,
    imageSizeChanged: 6,
    layerContentChanged: 7,
    selectionChanged: 8,
    sizerChanged: 9,
    toolDeActivated: 10,
    layersChanged: 11,
    modifierKeyChanged:12,
    toolChanged: 13,
    toolOptionsChanged: 14,
    brushOptionsChanged: 15,
    colorCount:16,
    layerHistory:17,
    imageHistory:18,
    selectionHistory:19,
    paletteHistory:20,
    historyChanged:21,
    endPolygonSelect: 22,
    framesChanged: 23,
    UIresize: 24,
}