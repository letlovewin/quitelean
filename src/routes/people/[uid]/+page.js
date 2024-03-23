/*

    @File: +page.js for people/[uid]
    @Author: Gray
    @Date of creation: 3/21/24

*/

/*
    @function load
    @param {params}
    @description Gets the username that was plugged into the URL and passes it to the +page.svelte.
*/

export function load({ params }) {
    let pid = params.uid;
    if(pid!="+layout.svelte") { //Weird errors would pop up where the pid would be +layout.svelte somehow. Don't touch
        return {
            information: {
                username: pid,
            }
        }
    }
}