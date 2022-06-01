<script>
    import {FeedbackStore} from '../stores'

    $: count = $FeedbackStore.length
	$: average = $FeedbackStore.reduce((prev, {rating}) => prev + rating, 0) / $FeedbackStore.length

</script>

<div class="feedback-stats">
    <h3>{count} Reviews</h3>
    <h3>Ratings Average: {average > 0 ? average : 0}</h3>
</div>


<style>
    .feedback-stats{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>