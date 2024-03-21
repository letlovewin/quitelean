<script>
    export let rating,title,link;
</script>

<div class="row mt-3">
    <div class="col-1">
        <p class="bg-success rounded-pill">{rating}</p>
    </div>
    <div class="col-4">
        <p><a href={link}>{title}</a></p>
    </div>
</div>