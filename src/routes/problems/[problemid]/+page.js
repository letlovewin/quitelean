export function load({ params }) {
    let pid = params.problemid;
    if(pid!="+layout.svelte") {
        return {
            information: {
                title: params.problemid,
            }
        }
    }
    
    
}