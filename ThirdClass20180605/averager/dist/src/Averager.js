import * as $ from "jquery";
var Averager = /** @class */ (function () {
    function Averager() {
        var _this = this;
        this.CLICK = "click";
        this.values = [];
        /* when getAverage button is clicked call this.findAverage */
        $("#getAverage").on(this.CLICK, function (event) {
            _this.findAverage();
        });
        /* .on adds the event handler to the object */
        /* parenthesis always mean a function invocation for example (event:MouseEvent) */
        $("#addBtn").on(this.CLICK, function (event) {
            /* the below will always reference the target id in the HTML */
            /* id selectors like this are very common */
            var val = $("#target").val();
            /* immediately case string in target to a number and put it in the array */
            var _number = new Number(val);
            _this.addValue(_number.valueOf());
        });
        $("#getLowest").on(this.CLICK, function (event) {
            _this.getLowest();
        });
        $("#reset").on(this.CLICK, function (event) {
            _this.values = [];
            $("p").html("All data values have been removed.");
        });
    }
    Averager.prototype.addValue = function (value) {
        if (value >= 0) {
            this.values.push(value);
            $("p").html("We have... " + this.values.join(","));
        }
        $("#target").val("");
    };
    Averager.prototype.findAverage = function () {
        if (this.values.length > 0) {
            var result = this.values.reduce(function (accumulator, value) { return accumulator + value; });
            /* put string template in the paragraph section of the HTML */
            $("p").html("The average is: " + (result / this.values.length).toFixed(2));
        }
    };
    Averager.prototype.getLowest = function () {
        if (this.values.length > 0) {
            var lowest = Math.min.apply(Math, this.values);
            $("p").html("The lowest is: " + lowest);
            console.log(lowest);
        }
    };
    return Averager;
}());
export { Averager };
//# sourceMappingURL=Averager.js.map