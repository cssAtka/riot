import riot from 'riot'

riot.tag('content',
	`<input type="text" value="Test" class="content__input{visibility}" onkeyup={onInputChange}></input>
	<p class="content__text{visibility}">{inputValue}</p>
	<button onclick={onButtonClick}>{buttonStatus}</button>
	`,

	function() {
		this.buttonStatus = 'hide'
		this.onInputChange = ev => {
			this.inputValue = ev.target.value
		}
		this.onButtonClick = function() {
			if (this.buttonStatus === 'show') {
				this.buttonStatus = 'hide'
				this.visibility = '--show'
			} else {
				this.buttonStatus = 'show'
				this.visibility = '--hide'
			}
		}
})