var Color = function(){
    var me = {};

    me.toString = function(color){
        // Uint8ClampedArray returns false on isArray;
        if (typeof color === "object" && color.length){
            return "rgb(" + color[0] + "," + color[1] + "," +  color[2] + ")";
         }
        return color;
    }

    me.fromString = function(color){
        if (typeof color === "object") return color;
        if (color.indexOf("rgb") === 0){
            let parts = color.split("(")[1].split(")")[0].split(",");
            if (parts.length===4) return [parseInt(parts[0]),parseInt(parts[1]),parseInt(parts[2]),parseInt(parts[3])];
            return [parseInt(parts[0]),parseInt(parts[1]),parseInt(parts[2])];
        }
        if (color.indexOf("#") === 0){
            let r = parseInt(color.substr(1,2),16);
            let g = parseInt(color.substr(3,2),16);
            let b = parseInt(color.substr(5,2),16);
            if (color.length===9) return [r,g,b,parseInt(color.substr(7,2),16)];
            return [r,g,b];
        }
        return color;
    }

    me.toHex=function(color){
        if (typeof color==="string"){
            color = me.fromString(color);
        }
        if (typeof color === "object" && color.length){
            let result = "#" + hexByte(color[0]) + hexByte(color[1]) +  hexByte(color[2]);
            if (color.length===4) result += hexByte(color[3]);
            return result;
        }
    }

    me.toHSV = function(color){
        if (typeof color==="string"){
            color = me.fromString(color);
        }
        if (typeof color === "object" && color.length){
            let r = color[0]/255;
            let g = color[1]/255;
            let b = color[2]/255;
            let max = Math.max(r,g,b);
            let min = Math.min(r,g,b);
            let h,s,v = max;
            let d = max-min;
            s = max===0 ? 0 : d/max;
            if (max===min){
                h = 0; // shade of gray
            }else{
                switch (max){
                    case r: h = (g-b)/d + (g<b ? 6 : 0); break;
                    case g: h = (b-r)/d + 2; break;
                    case b: h = (r-g)/d + 4; break;
                }
                h /= 6;
            }
            return [h,s,v];
        }
    }

    me.toLAB = function(color){
        if (typeof color==="string"){
            color = me.fromString(color);
        }
        if (typeof color === "object" && color.length){
            let r = color[0]/255;
            let g = color[1]/255;
            let b = color[2]/255;
            let x,y,z;
            r = (r>0.04045) ? Math.pow((r+0.055)/1.055,2.4) : r/12.92;
            g = (g>0.04045) ? Math.pow((g+0.055)/1.055,2.4) : g/12.92;
            b = (b>0.04045) ? Math.pow((b+0.055)/1.055,2.4) : b/12.92;
            x = (r*0.4124 + g*0.3576 + b*0.1805)/0.95047;
            y = (r*0.2126 + g*0.7152 + b*0.0722);
            z = (r*0.0193 + g*0.1192 + b*0.9505)/1.08883;
            x = (x>0.008856) ? Math.pow(x,1/3) : (7.787*x) + 16/116;
            y = (y>0.008856) ? Math.pow(y,1/3) : (7.787*y) + 16/116;
            z = (z>0.008856) ? Math.pow(z,1/3) : (7.787*z) + 16/116;
            return [(116*y)-16,500*(x-y),200*(y-z)];
        }
    }

    me.distance = function(color1,color2){
        // note: this is rather simplistic, but it's fast to calculate
        // for better results, use a color space like LAB or HSV
        color1 = me.fromString(color1);
        color2 = me.fromString(color2);
        let r = color1[0] - color2[0];
        let g = color1[1] - color2[1];
        let b = color1[2] - color2[2];
        if (color1.length===4 && color2.length===4){
            let a = color1[3] - color2[3];
            return Math.sqrt(r*r + g*g + b*b + a*a);
        }
        return Math.sqrt(r*r + g*g + b*b);
    }

    me.distanceHSV = function(color1,color2){
        let c1 = me.toHSV(color1);
        let c2 = me.toHSV(color2);
        let h = c1[0] - c2[0];
        let s = c1[1] - c2[1];
        let v = c1[2] - c2[2];
        return Math.sqrt(h*h + s*s + v*v);
    }

    me.distanceLAB = function(color1,color2){
        let c1 = me.toLAB(color1);
        let c2 = me.toLAB(color2);
        let l = c1[0] - c2[0];
        let a = c1[1] - c2[1];
        let b = c1[2] - c2[2];
        return Math.sqrt(l*l + a*a + b*b);
    }

    function hexByte(nr){
        if (typeof nr === "string") nr=parseInt(nr);
        let result = nr.toString(16);
        if (result.length===1) result = "0" + result;
        return result;
    }

    return me;
}();

export default Color;