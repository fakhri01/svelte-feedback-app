<script>
    import {FeedbackStore} from '../stores'
    import {fade, scale} from 'svelte/transition'
    import FeedBackItem from "./FeedBackItem.svelte";

    
</script>

{#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:fade="{{duration: 500}}">
        <FeedBackItem {fb} />
    </div>
{/each}
