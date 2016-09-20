var obj = {};

obj.formatMoney = function (num) {
    num = num.replace(',', '').replace(',', '');
    var number = parseFloat(num);
    number = number.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').split('.');
    return number[0] != 'NaN' ? number[0] : 0;
},

    obj.getCharLength = function (str) {
    var iLength = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
            iLength += 2;
        }
        else {
            iLength += 1;
        }
    }
    return iLength;
},

    obj.matchUrl = function (string) {
    var reg = /((http|ftp|https):\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&;:\/~\+#]*[\w\-\@?^=%&;\/~\+#])?/g;

    string = string.replace(reg, function (a) {
        if (a.indexOf('http') !== -1 || a.indexOf('ftp') !== -1) {
            return '<a href=\"#\" onclick=\"event.stopPropagation();window.open(\'' + a + '\',\'_blank\')\">' + a + '</a>';
        }
        else {
            return '<a href=\"#\" onclick=\"event.stopPropagation();window.open(\'http://' + a + '\',\'_blank\')\">' + a + '</a>';
        }
    });
    return string;
};
    obj.validate = function (formId, rules) {

};
    obj.convertMinCoin = function (val) {
    val = val.replace(',', '').replace(',', '').replace(',', '');
    val = parseFloat(val);
    if (isNaN(val)) {
        return '';
    }
    val = val.formatMoney(0, '.', ',');
    return val;
};
    obj.bindEvents = function (bindings) {
    for (var i in bindings) {
        if (bindings[i].selector) {
            $$(bindings[i].element)
                .on(bindings[i].event, bindings[i].selector, bindings[i].handler);
        } else {
            $$(bindings[i].element)
                .on(bindings[i].event, bindings[i].handler);
        }
    }
};


String.prototype.escape = function () {
    var newline = String.fromCharCode(13, 10);
    var str = this;
    str = str.replaceAll('\\n', newline);
    str = str.replaceAll('<br />', '');
    return str;
};

Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseFloat(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

String.prototype.replaceAll = function (find, replace) {
    var result = this;
    do {
        var split = result.split(find);
        result = split.join(replace);
    } while (split.length > 1);
    return result;
};

Object.defineProperty(Object.prototype, 'setData', {
    value: function (key, data) {
        if (typeof  key == 'object') {
            Object.defineProperty(this, data, {
                value: data,
                writable: true,
                enumerable: true,
                configurable: true
            });
        } else {
            Object.defineProperty(this, key, {
                value: key,
                writable: true,
                enumerable: true,
                configurable: true
            });
            this[key] = data;
        }
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'getData', {
    value: function (keyData, notLower) {
        var obj = this;
        if (typeof notLower == 'undefined') {
            keyData = keyData.toLowerCase();
        }
        for (var key in obj) {
            if (keyData != key) {
                continue
            }
            return this[key];

        }
        return undefined;
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'getFirstData', {
    value: function (keyData) {
        var obj = this;
        for (var key in obj) {
            return this[key];

        }
        return undefined;
    },
    enumerable: false
});
var minAlert = function (text) {
    if (typeof  text == 'object') {
        alert(JSON.stringify(text));
    }
};
window.onerror = function (message, url, lineNumber) {
    if (!debug) {
        return;
    }
    var content = {
        message: message,
        url: url,
        lineNumber: lineNumber,
    };
    minAlert(content);
    return true;
};