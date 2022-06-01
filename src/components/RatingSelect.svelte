<script>
    import {createEventDispatcher} from 'svelte'

    let selected = 10
    
    const dispatch = createEventDispatcher()

    const onChange = (e) => {
        selected = e.currentTarget.value
        dispatch('rating-select', selected)
    }
</script>

<ul class="rating">
    <li>
        <input type="radio" id="num1" name="rating" on:change={onChange} value="1" checked={selected===1}>
        <label for="num1">1</label>
    </li>
    <li>
        <input type="radio" id="num2" name="rating" on:change={onChange} value="2" checked={selected===2}>
        <label for="num2">2</label>
    </li>
    <li>
        <input type="radio" id="num3" name="rating" on:change={onChange} value="3" checked={selected===3}>
        <label for="num3">3</label>
    </li>
    <li>
        <input type="radio" id="num4" name="rating" on:change={onChange} value="4" checked={selected===4}>
        <label for="num4">4</label>
    </li>
    <li>
        <input type="radio" id="num5" name="rating" on:change={onChange} value="5" checked={selected===5}>
        <label for="num5">5</label>
    </li>
    <li>
        <input type="radio" id="num6" name="rating" on:change={onChange} value="6" checked={selected===6}>
        <label for="num6">6</label>
    </li>
    <li>
        <input type="radio" id="num7" name="rating" on:change={onChange} value="7" checked={selected===7}>
        <label for="num7">7</label>
    </li>
    <li>
        <input type="radio" id="num8" name="rating" on:change={onChange} value="8" checked={selected===8}>
        <label for="num8">8</label>
    </li>
    <li>
        <input type="radio" id="num9" name="rating" on:change={onChange} value="9" checked={selected===9}>
        <label for="num9">9</label>
    </li>
    <li>
        <input type="radio" id="num10" name="rating" on:change={onChange} value="10" checked={selected===10}>
        <label for="num10">10</label>
    </li>
</ul>

<style>
    .rating{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 30px 0;
    }
    .rating li{
        position: relative;
        background-color: #f4f4f4;
        padding: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #eee;
        transition: .3s;
    }
    .rating li label{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
    .rating li:hover{
        background-color: #ff6a95;
        color: #fff;
    }

    input[type="radio"]{
        opacity: 0;
    }
    input[type="radio"]:checked ~ label {
        background-color: #ff6a95;
        color: #fff;
    }
</style>