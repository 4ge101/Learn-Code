// slider which change background img 

const nextBtn = document.querySelector('.next') as HTMLButtonElement;
const prevBtn = document.querySelector('.prev') as HTMLButtonElement;

const slider = document.querySelector('.slider') as HTMLElement;
const sliderList = slider.querySelector('.list') as HTMLElement;
const thumbnail = document.querySelector('.slider .thumbnail') as HTMLElement;
const thumbnailItems = thumbnail.querySelectorAll('.item') as NodeListOf<HTMLElement>;

// Append the first thumbnail item initially
thumbnail.appendChild(thumbnailItems[0]);

// Function for next button
nextBtn.onclick = () => {
    moveSlider('next');
};

// Function for prev button
prevBtn.onclick = () => {
    moveSlider('prev');
};

// Function to move the slider
function moveSlider(direction: 'next' | 'prev'): void {
    const sliderItems = sliderList.querySelectorAll('.item') as NodeListOf<HTMLElement>;
    const thumbnailItems = document.querySelectorAll('.thumbnail .item') as NodeListOf<HTMLElement>;

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    // Remove the animation class after animation ends
    slider.addEventListener(
        'animationend',
        () => {
            slider.classList.remove(direction);
        },
        { once: true }
    );
}