<script>
    import {v4 as uuidv4} from 'uuid'
    import {FeedbackStore} from '../stores'
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import RatingSelect from './RatingSelect.svelte'


    let text = "";
    let rating = 10
    let btnDisabled = true;
    let min = 10
    let message


    const handleInput = () => {
        if (text.trim().length <= min) {
            message = `Text must be at least ${min} characters!`
            btnDisabled = true
        }else{
            message = null
            btnDisabled = false
        }
    }

    const handleSelect = e => rating =e.detail;

    const handleSubmit = () => {
        if(text.trim().length > min){
            const newFeedBack = {
                id: uuidv4(),
                text,
                rating: +rating
            }

            FeedbackStore.update((currentFeedback) => {
                return [newFeedBack, ...currentFeedback]
            })
            text = ''
        }
    }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>

    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleSelect} />
        <div class="input-group">
            <input
                on:input={handleInput}
                bind:value={text}
                type="text"
                placeholder="Tell us something that keeps you coming back"
            />
            <Button disabled={btnDisabled}  type="submit">Send</Button>
        </div>
        {#if message}
        <div class="message">
            {message}
        </div>
        {/if}
    </form>
</Card>

<style>
    header{
        max-width: 400px;
        margin: auto;
    }
    header h2{
        text-align: center;
        font-style: 22px;
        
    }
    .input-group{
        display: flex;
        justify-content: space-between;
        border: 1px solid #333;
        border-radius: 10px;
        padding: .4rem .5rem;
        margin-top: 1rem;
    }
    .input-group input{
        border: none;
        outline: none;
        flex: 2;
        font-size: 1.05rem;
    }
    
    .message{
        text-align: center;
        color: blueviolet;
    }
</style>
