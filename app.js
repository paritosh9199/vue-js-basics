var data = {
    name: "paritosh",
    job: "developer",
    age: 21,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    nearby: false,
    available: false,
    website: "https://paritosh.ml",
    websiteTag: "<a href='https://paritosh.ml'>The link using bind</a>"
}

var vm = new Vue({
    el: "#vue-app",
    data: data,
    methods: {
        greet: function (date) {
            return `Hey! ${data.name} ${date}`;
        },
        addY: (yr = 1) => {
            data.age += yr;
        },
        subY: (yr = 1) => {
            data.age -= yr;
        },
        updatecoord: function (event) {
            // pass event object, bound to mouse move with updat
            // console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        clickMe: function () {
            alert('Hey');
        },
        logName: () => {
            // this.name = this.value;
            console.log(this.name);
        },
        logAge: () => {
            console.log(this.age)
        }

    },
    computed: {
        addToA: function () {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function () {
            console.log('addToB');
            return this.b + this.age;
        },
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
});