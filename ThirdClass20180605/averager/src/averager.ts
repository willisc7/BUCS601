import * as $ from "jquery";

class Averager {
    private CLICK:any = "click";
    private values:number[] = [];

    constructor() {
        /* when getAverage button is clicked call this.findAverage */
        $("#getAverage").on(this.CLICK, (event:MouseEvent) => {
            this.findAverage();
        });

        /* .on adds the event handler to the object */
        /* parenthesis always mean a function invocation for example (event:MouseEvent) */
        $("#addBtn").on(this.CLICK, (event:MouseEvent) => {
            /* the below will always reference the target id in the HTML */
            /* id selectors like this are very common */
            const val:String = $("#target").val() as string;

            /* immediately case string in target to a number and put it in the array */
            const _number:Number = new Number(val);
            this.addValue(_number.valueOf());
        });

        $("#getLowest").on(this.CLICK, (event:MouseEvent) => {
            this.getLowest();
        });

        $("#reset").on(this.CLICK, (event:MouseEvent) => {
            this.values = [];
            $("p").html("All data values have been removed.");
        });
    }

    public addValue(value:number):void {
        if ( value >= 0 ) {
            this.values.push(value);
            $("p").html(`We have... ${this.values.join(",")}`);
        }
        $("#target").val("");
    }

    public findAverage():void {
        if (this.values.length > 0) {
            let result = this.values.reduce((accumulator, value) => accumulator + value); 
            /* put string template in the paragraph section of the HTML */
            $("p").html(`The average is: ${(result/this.values.length).toFixed(2)}`);
        }
    }

    public getLowest():void {
        if (this.values.length > 0){
            let lowest = Math.min(...this.values);
            $("p").html(`The lowest is: ${lowest}`);
            console.log(lowest);
        }
    }
}

export {Averager};