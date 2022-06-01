<script>
    import {FeedbackStore} from '../stores'
    import Card from './Card.svelte'

    export let fb;

    const deleteHandler = (itemId) => {
        FeedbackStore.update((currentFeedback) => {
            return currentFeedback.filter(item => item.id != itemId)
        })
    }

</script>

<Card>
    <div class="num-display">
        {fb.rating}
    </div>
    <button class="close" on:click={() => deleteHandler(fb.id)}>X</button>
    <p class="text-display">
        {fb.text}
    </p>
</Card>

<style>
   .num-display{
       width: 50px;
       height: 50px;
       background-color: #ff6a95;
       color: #fff;
       text-align: center;
       font-size: 1.1rem;
       border: 1px solid #eee;
       border-radius: 50%;
       padding: 10px;
       position: absolute;
       top: -10px;
       left: -10px;
   }
   .close{
       position: absolute;
       top: 10px;
       right: 20px;
       cursor: pointer;
       border: none;
       background-color: transparent;
   }

</style>