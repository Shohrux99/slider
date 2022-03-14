class Slider {
    constructor(options){
        this.slider = document.querySelector(options.slider)
        this.sliderLine = document.querySelector('.slider__line')
        this.slides = this.sliderLine.children
        this.prev = this.slider.querySelector('.slider__prev')
        this.next = this.slider.querySelector('.slider__next')
        this.sliderHeight = options.sliderHeight
        this.sliderWidth = this.slider.clientWidth
        this.moveSize = this.sliderWidth

        this.sliderLine.style = `position: relative;
                                 height: ${this.sliderHeight}px                        
        `

        this.activeSlide = 0

        for(let i=0; i<this.slides.length; i++){
            this.slides[i].style = `position: absolute;
                                    height: 100%;
                                    width: ${this.sliderWidth}px
                                    `

            if(i != this.activeSlide){
                this.slides[i].style.transform = `translateX(${this.moveSize}px)`
            }

            if(i == this.slides.length - 1){
                this.slides[i].style.transform = `translateX(${-this.moveSize}px)`
            }

            
        }

        this.prev.addEventListener('click', () => this.move(this.prev))
        this.next.addEventListener('click', () => this.move(this.next)) 
    }

    move(btn) {
        // let rightOrLeft = btn == this.next ? -this.moveSize : this.moveSize
        
        this.activeSlide++

        for (let i=0; i < this.slides.length; i++) {
            this.slides[i].style.transform = `translateX(${-this.moveSize}px)`
            if(this.slides[this.activeSlide]){
                this.slides[this.activeSlide].style.transform = `translateX(${0}px)`
                this.activeSlide++
            }
        }
    }
}

const slider = new Slider({
    slider: '.slider',
    direction: 'x',
    sliderHeight: 600
})