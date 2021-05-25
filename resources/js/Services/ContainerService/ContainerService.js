export function extractsSubCategories(data = Array()) {
    let array = []
    array.push({ subcontainer_name: data[0].subcontainer_name, processes: [] })
    for (let i = 0; i < data.length; i++) {
        let found = false;
        for (let y = 0; y < array.length; y++) {
            if (array[y].subcontainer_name === data[i].subcontainer_name) {
                found = true;
            }

        }
        if (found === false) {
            array.push({ subcontainer_name: data[i].subcontainer_name, processes: [] })
        }
    }
    return array
}
// group processes  by sub containers and return a new array
export function sub_container_processes(data = Array()) {
    let array = this.extractsSubCategories(data)
    console.log(array, "array")
    for (let i = 0; i < data.length; i++) {
        for (let y = 0; y < array.length; y++) {
            if (data[i].subcontainer_name === array[y].subcontainer_name) {

                array[y].processes.push(data[i])

            }
        }
    }
    return array

}

export function scroll() {
    (function () {
        'use strict';

        var section = document.querySelectorAll(".section");
        var sections = {};
        var i = 0;

        Array.prototype.forEach.call(section, function (e) {
            sections[e.id] = e.offsetTop;
        });

        window.onscroll = function () {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

            for (i in sections) {
                if (sections[i] <= scrollPosition) {
                    document.querySelector('.active').setAttribute('class', 'inactive');
                    document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
                }
            }
        };
    })();
}