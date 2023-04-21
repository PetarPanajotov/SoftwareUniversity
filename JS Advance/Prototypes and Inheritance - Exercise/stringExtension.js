(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this + "";
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this + "";
    }
    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true
        }
        return false
    }
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this + ""
        }
        if (n < 4) {
            return ".".repeat(n)
        }
        if (!this.includes(' ')) {
            return this.slice(0, n - 3) + '...';
        } else {
            let result = this.slice();
            while (result.length > n - 3) {
                result = result.split(' ');
                result.pop();
                result = result.join(' ');
            }
            return `${result}...`;
        }
    }
    String.format = function (str, ...params) {
        let counter = 0;
        for (let index of params) {
            str = str.replace(`{${counter}}`, index)
            counter++
        }
        return str;
    }
})()
let str = 'Hello my string';
str = str.truncate(15);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(1);
console.log(str)


