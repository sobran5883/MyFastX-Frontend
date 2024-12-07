import packagingBox from '../../../../assets/packaging_guide/packaging-box.png'
import itemPackaging from '../../../../assets/packaging_guide/item-packing.png'
import cushioningParcel from '../../../../assets/packaging_guide/cushioning-parcel.png'
import letterInside from '../../../../assets/packaging_guide/letter-inside.png'
import securingParcel from '../../../../assets/packaging_guide/securing-parcel.png'
import tape from '../../../../assets/packaging_guide/tape.png'
import labelling from '../../../../assets/packaging_guide/labelling.png'
import readyToSend from '../../../../assets/packaging_guide/ready-to-send.png'
import veryOldBox from '../../../../assets/packaging_guide/very-old-box.png'
import tornBox from '../../../../assets/packaging_guide/torn-box.png'
import overPackedBox from '../../../../assets/packaging_guide/over-packed-box.png'
import boxWithStuff from '../../../../assets/packaging_guide/box-with-stuff.png'
function ParcelGuide() {
  return (
    <div className='w-full flex flex-col items-center'>
  <section className="md:py-20 py-10 bg-deep-green w-full ">
    <div className="container text-center px-4">
      <div className="flex justify-center items-center">
        <h1 className="sm:text-6xl text-4xl font-bold tracking-wide text-white md:mr-4 mr-0">Packaging and Labelling</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="244" height="176" viewBox="0 0 244 176" fill="none" className="w-28 h-28">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.916667 130.948L0.5 53.5678L119.865 10.0209L243.969 49.6303L241.813 117.401L147.089 175.021L0.916667 130.948Z" fill="#F5BA53"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.1615 84.7396L11.4375 124.74L31.8958 131.219L35.1615 90.3907L13.1615 84.7396ZM55.2031 72.2344L97.8854 50.0052L122.297 57.4948L81.599 80.4375L76.3906 109.438L53.1927 103.469L55.2031 72.2344Z" fill="#FEF7E4"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M138.025 69.0521L118.854 80.7657L145.301 89.375L164.906 77.2969L138.025 69.0521ZM221.364 88.7084L219.025 115.427L155.9 143.865L156.202 115.917L221.364 88.7084Z" fill="#FEF7E4"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M193.677 112.839L208.162 100.651L210.234 108.729L208.042 108.172L207.26 110.156L203.469 110.109L207.052 111.88L208.849 109.849L210.448 109.536L211.922 113.536L194.287 114.333L170.854 125.406L164.177 132.781L164.396 118.76L170.255 121.786L193.677 112.839ZM215.896 113.802C213.797 114.729 204.188 119.005 193.469 123.781C179.547 129.99 163.755 137.057 160.037 138.724L160.563 118.021C162.958 117.005 180.255 109.729 195.354 103.339C205.385 99.1041 214.448 95.2448 217.563 93.9218L215.896 113.802ZM218.87 92.125C218.651 91.9687 218.37 91.9375 218.13 92.0364C218.13 92.0364 207.214 96.75 194.839 102.125C178.635 109.161 159.932 117.323 159.932 117.323V117.302C159.776 117.38 159.677 117.531 159.667 117.714H159.646L158.885 139.589C158.875 139.776 158.979 139.958 159.135 140.068C159.297 140.177 159.495 140.198 159.677 140.115C159.677 140.115 178.099 132.073 194.037 125.089C206.214 119.755 216.943 115.042 216.943 115.042C217.203 114.922 217.37 114.672 217.401 114.391L219.177 92.7968C219.198 92.5364 219.078 92.276 218.87 92.125Z" fill="#D13123"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M107.937 136.031C107.676 135.474 107.296 134.974 106.729 134.755C106.062 134.484 105.104 134.484 104.374 134.833C103.843 135.073 103.437 135.464 103.296 136.042C103.296 136.063 103.286 136.078 103.265 136.099C103.135 136.786 102.885 137.453 102.916 138.135C102.937 138.531 103.104 138.901 103.494 139.307C103.765 139.609 104.093 139.75 104.432 139.839C104.984 139.979 105.562 139.859 106.109 139.641C106.577 139.448 106.999 139.172 107.348 138.833C107.687 138.51 107.979 138.151 108.077 137.724C108.223 137.177 108.166 136.557 107.937 136.031ZM109.312 135.271C109.854 136.109 110.051 137.135 109.932 138.083C109.801 138.901 109.395 139.667 108.786 140.276C108.223 140.833 107.515 141.255 106.76 141.484C106.301 141.63 105.822 141.714 105.354 141.703C104.171 141.672 103.067 141.234 102.38 140.156C101.911 139.37 101.781 138.703 101.911 138.063C102.077 137.177 102.676 136.411 102.984 135.542C103.005 135.453 103.098 135.391 103.176 135.391C103.395 134.802 103.885 134.344 104.484 134.026C105.291 133.589 106.27 133.479 107.057 133.62C108.015 133.807 108.786 134.453 109.312 135.271ZM104.531 123.969L104.541 123.979V123.932L104.525 123.943L104.531 123.953C104.531 123.958 104.531 123.958 104.531 123.969ZM99.5931 125.016C99.6244 125.026 99.6348 124.99 99.6452 124.927C99.5827 124.948 99.5306 124.99 99.5931 125.016ZM104.525 123.943C104.452 123.99 104.432 124.042 104.494 124.089C104.525 124.109 104.531 124.052 104.541 124.021C104.541 124.01 104.541 124 104.541 123.979C104.562 124 104.593 124.01 104.635 123.99C104.713 123.969 104.713 123.922 104.661 123.88C104.614 123.891 104.583 123.911 104.541 123.932C104.541 123.891 104.541 123.839 104.541 123.802L104.505 123.781C104.505 123.839 104.505 123.901 104.525 123.943ZM99.4108 124.688C99.3639 124.031 99.4629 122.854 99.4733 122.776C99.5723 121.87 99.7337 120.932 99.9837 120.031C100.15 119.406 100.369 118.797 100.65 118.229C100.801 117.911 101.041 117.495 101.327 117.193C101.531 116.995 101.77 116.865 102.02 116.776C102.546 116.604 102.984 116.797 103.338 117.151C103.723 117.542 103.937 118.349 104.025 118.708C104.145 119.188 104.213 119.677 104.275 120.161C104.343 120.781 104.374 121.411 104.411 122.026C104.531 121.995 104.645 121.969 104.744 121.938C105.452 121.76 106.229 121.677 107.01 121.729C107.775 121.776 108.546 121.948 109.213 122.255C109.505 122.385 109.723 122.594 109.854 122.865C109.984 122.464 110.005 121.979 109.952 121.49C109.854 120.63 109.541 119.786 109.005 119.417C108.926 119.354 108.895 119.286 108.854 119.328C108.807 119.375 108.786 119.448 108.765 119.526C108.676 119.943 108.755 120.594 108.786 120.75C108.807 120.813 108.765 120.88 108.702 120.901C108.645 120.911 108.583 120.88 108.567 120.823C108.484 120.604 108.255 119.656 108.395 119.208C108.505 118.87 108.765 118.688 109.286 118.958C110.005 119.328 110.562 120.292 110.822 121.339C111.098 122.458 110.942 123.63 110.39 124.318C109.671 125.198 109.156 124.776 108.937 124.5C108.843 124.37 108.775 124.13 108.713 123.839C108.697 123.771 108.656 123.651 108.624 123.583C108.104 123.422 107.536 123.365 106.968 123.38C106.38 123.391 105.791 123.51 105.26 123.693C105.14 123.729 104.9 123.792 104.713 123.859C104.765 123.932 104.812 124 104.833 124.031C104.911 124.172 104.952 124.292 104.973 124.391C105.062 124.75 104.932 125.016 104.791 125.224C104.645 125.427 104.354 125.714 103.734 125.615C103.385 125.557 103.057 125.339 102.838 124.938C102.624 124.536 102.536 123.771 102.515 123.563C102.406 122.484 102.416 121.401 102.359 120.313C102.338 119.896 102.317 119.474 102.249 119.047C102.239 118.948 102.218 118.776 102.176 118.599C102.077 118.719 101.999 118.839 101.926 118.948C101.551 119.536 101.229 120.172 100.968 120.833C100.692 121.531 100.473 122.224 100.281 122.922C100.26 123.005 100.02 123.922 99.9421 124.536C100.01 124.589 100.041 124.667 100.01 124.75C100.005 124.797 100.02 125.068 99.9941 125.156C99.9525 125.307 99.8327 125.339 99.7546 125.339C99.6712 125.344 99.6139 125.297 99.5514 125.234C99.4837 125.167 99.4316 124.969 99.4108 124.688ZM104.213 130.609C104.234 130.677 104.255 130.719 104.312 130.688C104.374 130.656 104.301 130.63 104.213 130.609ZM101.999 128.078C101.979 128.036 101.947 128.057 101.911 128.109H101.916C101.947 128.099 102.02 128.109 101.999 128.078ZM101.671 128.047C101.65 128.016 101.63 127.995 101.609 128.016C101.598 128.026 101.63 128.026 101.64 128.036L101.671 128.047ZM99.2233 131.615C99.2546 131.776 99.3119 131.896 99.4108 131.844C99.5827 131.766 99.4212 131.677 99.2233 131.615ZM98.6348 131.604C98.6244 131.604 98.6035 131.615 98.5931 131.625C98.5671 131.646 98.3952 131.677 98.4525 131.714C98.5358 131.755 98.5931 131.703 98.6348 131.604ZM110.604 128.667C111.281 128.474 111.911 128.109 112.63 128.078C112.687 128.068 112.749 128.115 112.755 128.177C112.765 128.245 112.718 128.297 112.656 128.307C111.968 128.448 111.432 128.917 110.801 129.203C110.499 129.344 110.182 129.432 109.833 129.464C109.182 129.51 108.463 129.016 107.807 128.865C107.666 128.833 107.536 128.844 107.406 128.932C107.098 129.146 106.817 129.672 106.479 130.188C106.098 130.786 105.671 131.375 105.234 131.766C104.791 132.146 104.301 132.302 103.817 132.271C103.458 132.255 103.166 132.063 102.926 131.797C102.666 131.495 102.515 130.995 102.416 130.698C102.317 130.359 102.166 129.464 101.916 128.688C101.88 128.547 101.827 128.417 101.77 128.297C101.76 128.318 101.739 128.339 101.729 128.354C101.551 128.604 101.38 128.906 101.218 129.224C100.801 130.063 100.473 130.99 100.281 131.396C100.213 131.547 99.9837 132.182 99.7546 132.51C99.5046 132.849 99.2129 133.021 98.9837 133.031C98.7025 133.042 98.4056 132.969 98.2077 132.661C98.1244 132.521 98.0254 132.323 97.9837 132.073C97.9264 131.724 97.9264 131.266 97.916 131.198C97.8848 130.667 97.8744 130.141 97.8744 129.609C97.8744 128.833 97.9056 128.057 97.9056 127.281C97.916 127.141 97.8483 126.641 97.8639 126.333C97.8744 126.172 97.9056 126.052 97.9577 125.995C98.015 125.917 98.1348 125.896 98.2181 125.953C98.2962 126.016 98.3171 126.125 98.2546 126.203L98.5046 127.229C98.666 128.125 98.7962 129.005 98.9629 129.901L98.9733 129.979C99.2025 129.224 99.515 128.219 99.9421 127.469C100.421 126.62 101.109 126.135 101.77 126.073C102.38 126.031 102.926 126.302 103.327 126.901C103.577 127.281 103.775 127.807 103.906 128.385C104.072 129.125 104.135 129.922 104.202 130.24C104.213 130.292 104.202 130.411 104.213 130.521C104.301 130.469 104.406 130.37 104.505 130.271C105.333 129.521 106.15 128.276 106.827 127.938C107.26 127.729 107.676 127.719 108.104 127.885C108.426 128.005 108.744 128.219 109.072 128.417C109.322 128.568 109.572 128.724 109.833 128.755C110.104 128.776 110.354 128.734 110.604 128.667ZM115.51 129.922C115.52 125.057 114.275 120.063 112.156 116.464C110.369 113.448 107.984 111.391 105.192 111.38V111.354C102.38 111.365 100.124 113.026 98.5046 115.677C96.5879 118.797 95.5723 123.281 95.5931 128.125C95.5983 133.01 97.0098 137.646 99.2754 140.896C101.14 143.557 103.593 145.271 106.348 145.271C109.114 145.271 111.26 143.906 112.775 141.594C114.583 138.833 115.499 134.745 115.51 129.922ZM113.077 115.917C115.312 119.656 116.64 124.859 116.661 129.922C116.671 135.016 115.682 139.318 113.775 142.25C112.036 144.922 109.541 146.453 106.348 146.453C103.234 146.448 100.421 144.583 98.3275 141.552C95.9577 138.135 94.4941 133.26 94.5046 128.125C94.5202 123.063 95.64 118.401 97.6556 115.151C99.4837 112.208 102.046 110.406 105.192 110.417V110.385C108.317 110.375 111.062 112.557 113.077 115.917ZM119.312 129.76C119.322 123.563 117.645 117.193 114.791 112.641C112.437 108.859 109.275 106.339 105.604 106.328V106.292C101.916 106.302 98.9421 108.365 96.7858 111.651C94.2129 115.599 92.8275 121.307 92.8483 127.5C92.8535 133.74 94.7441 139.656 97.7962 143.766C100.27 147.094 103.505 149.208 107.13 149.208C110.76 149.208 113.604 147.521 115.609 144.641C118.057 141.146 119.301 135.932 119.312 129.76ZM115.702 112.073C118.666 116.766 120.442 123.344 120.463 129.76C120.473 136.208 119.145 141.661 116.588 145.328C114.354 148.536 111.182 150.391 107.13 150.391C103.156 150.38 99.5619 148.109 96.8691 144.453C93.7025 140.167 91.7494 133.995 91.7598 127.5C91.7806 121.089 93.265 115.182 95.9577 111.104C98.3171 107.536 101.588 105.354 105.604 105.365V105.323C109.604 105.313 113.109 107.974 115.702 112.073ZM242.822 51.3021L147.588 98.2761C147.739 98.3542 147.859 98.4948 147.859 98.6771C147.859 98.6771 147.937 108.484 148.015 120.969C148.036 125.667 148.067 130.75 148.077 135.833C148.109 154.411 148.067 172.99 148.067 172.99C148.067 173.234 147.859 173.448 147.598 173.448C147.348 173.448 147.14 173.245 147.14 172.99C147.14 172.99 146.968 154.411 146.89 135.833C146.859 130.76 146.859 125.677 146.848 120.969C146.838 108.484 146.859 98.6875 146.859 98.6875C146.859 98.5052 146.958 98.3854 147.088 98.2969C145.614 97.8594 118.775 89.974 88.4525 81.0261C47.6035 68.9636 0.436847 54.9792 0.436847 54.9792C0.17643 54.9011 0.0201801 54.6302 0.0983055 54.3646C0.176429 54.1042 0.457681 53.9531 0.718097 54.0261C0.718097 54.0261 47.9264 67.8698 88.7962 79.8854C118.374 88.599 144.635 96.3646 147.27 97.1406L242.411 50.474C242.64 50.3542 242.921 50.4583 243.031 50.6875C243.14 50.9167 243.051 51.1927 242.822 51.3021Z" fill="#BD651D"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M148.656 77.3959H150.781V78.3125H148.656V77.3959ZM146.343 76.6302H147.51V77.6563H146.343V76.6302ZM141.9 79.0209H143.874V80.1875H141.9V79.0209ZM137.656 77.8646L138.718 78.9896L137.281 80.3438L136.213 79.2188L137.656 77.8646ZM157.27 77.9948L158.557 77.1459L160.244 77.6459L159.036 78.75L157.27 77.9948ZM139.723 71.448L138.406 72.4948L136.848 71.7136L138.067 70.9271L139.723 71.448ZM124.083 80.0469L125.322 79.25L126.781 80.0157L125.65 80.8125L124.083 80.0469ZM161.718 77.4948L159.077 79.4011L155.932 78.1146L158.416 76.4375L161.718 77.4948ZM154.447 78.2709L159.223 79.9792L163.067 77.3282L158.395 75.9011L154.447 78.2709ZM138.494 73.1198L135.494 71.9167L137.979 70.2292L140.952 71.2188L138.494 73.1198ZM137.958 69.6927L134.005 72.073L138.864 74.1459L142.416 71.1459L137.958 69.6927ZM127.916 79.849L125.739 81.4427L122.739 80.2344L125.223 78.5625L127.916 79.849ZM121.249 80.3959L126.031 82.099L129.505 79.8386L125.202 78.0261L121.249 80.3959ZM115.531 36.6823C112.609 34.2292 106.619 30.7032 101.4 26.3542C98.3639 23.8334 95.5931 21.0365 93.9056 17.9844C92.4056 15.3021 91.1869 10.2605 92.14 6.5417C92.7181 4.27087 94.1921 2.54691 97.1296 2.45837C98.416 2.4167 99.5723 2.87504 100.63 3.56254C102.359 4.70837 103.807 6.46358 104.984 7.9792C107.499 11.2188 109.77 14.724 111.739 18.4011C113.697 22.0782 115.333 25.9271 116.577 29.8334C117.286 32.0573 118.525 37.3594 119.333 40.2709C119.192 40.1719 119.067 40.0625 118.926 39.9532C117.749 38.974 116.671 37.6302 115.531 36.6823ZM143.687 23.3177C155.156 19.1719 166.999 19.099 169.786 19.9167C172.807 20.8073 174.354 23.2292 174.775 26.0573C171.609 25.9792 167.661 26.5573 163.359 27.573C157.4 28.9688 150.791 31.1198 144.833 33.2917C136.093 36.474 128.775 39.6719 126.968 39.9896L122.895 40.5886C123.135 39.9532 123.348 39.3646 123.385 39.2917C127.765 31.1302 135.64 26.2188 143.687 23.3177ZM174.307 31.698C172.911 36.3021 169.135 40.3282 163.827 39.5313C161.671 39.2136 157.708 39.3542 153.145 39.7136C144.307 40.4271 133.135 41.9532 128.926 42.2917C128.536 42.323 127.796 42.2552 126.812 42.1042C126.979 42.0834 127.15 42.0625 127.317 42.0365C129.166 41.724 136.718 38.7136 145.635 35.474C151.52 33.3438 157.999 31.099 163.859 29.6355C168.031 28.599 171.859 27.9323 174.906 27.9688C174.885 29.2084 174.687 30.4844 174.307 31.698ZM196.713 78.9584C195.744 74.3177 194.604 70.948 193.52 69.5521C190.911 66.2032 185.812 63.1615 179.697 60.4636C167.708 55.1823 151.781 51.1146 144.255 47.823C142.89 47.2292 140.505 46.5105 137.708 45.7605C135.734 45.2344 133.557 44.7032 131.4 44.1875C136.572 43.6563 145.781 42.4948 153.327 41.9063C157.666 41.5782 161.442 41.4271 163.499 41.7448C169.994 42.7396 174.755 37.9896 176.484 32.3646C176.911 30.9896 177.119 29.5677 177.161 28.1615C177.999 28.3125 178.749 28.5417 179.348 28.8855C179.786 29.1459 180.333 29 180.593 28.5677C180.854 28.1407 180.713 27.5834 180.275 27.323C179.416 26.8073 178.327 26.4636 177.072 26.2552C176.65 22.349 174.567 18.9219 170.442 17.7032C167.499 16.8386 154.984 16.75 142.89 21.125C134.333 24.2136 125.999 29.5157 121.359 38.2188C121.338 38.2344 121.301 38.3542 121.229 38.5261C120.432 35.5157 119.374 31.1198 118.734 29.1459C117.437 25.1094 115.729 21.1563 113.702 17.3542C111.671 13.5677 109.312 9.96358 106.708 6.63024C105.39 4.94795 103.755 3.01566 101.817 1.75004C100.39 0.822952 98.7962 0.244828 97.0566 0.302119C92.9577 0.442744 90.8691 2.83337 90.0827 6.02608C89.0254 10.2396 90.39 15.9532 92.0983 18.9896C93.916 22.2292 96.8587 25.2292 100.104 27.9115C105.343 32.2344 111.348 35.7344 114.296 38.1667C114.973 38.7344 115.63 39.4323 116.312 40.1198C105.14 37.8698 88.8744 34.4896 75.2702 32.9271C68.9212 32.198 63.1348 31.8698 58.7233 32.2188C55.5983 32.4636 53.1348 33.073 51.5462 34.0625C51.1191 34.3282 50.9889 34.8855 51.2598 35.3177C51.515 35.7344 52.0775 35.8646 52.5046 35.6042C53.9108 34.7292 56.1087 34.2709 58.8639 34.0625C63.1868 33.7344 68.8327 34.0886 75.0514 34.8282C89.3014 36.5209 106.499 40.2396 117.619 42.5C117.51 42.5209 117.406 42.5521 117.296 42.573C114.255 43.0313 110.932 42.849 108.505 42.9427C106.827 43.0105 105.13 43.0521 103.447 43.0886C100.911 43.1407 98.3744 43.1823 95.8327 43.2084C91.7494 43.2917 86.0879 42.9427 80.041 42.9115C71.8952 42.8802 63.0462 43.448 56.2493 46.1719C50.4004 48.5 46.0358 52.4219 44.7129 58.8177L46.4889 59.2084C48.1556 51.7032 54.5202 48.2136 62.265 46.5677C67.4837 45.4636 73.3327 45.2136 78.9056 45.224C85.39 45.2344 91.5202 45.5938 95.8796 45.4948C98.4264 45.4323 100.968 45.375 103.505 45.2917C105.213 45.2344 106.911 45.1615 108.604 45.0834C110.833 44.9636 113.807 45.0261 116.64 44.6667C107.947 50.4271 96.5775 57.474 86.8171 64.3907C81.3171 68.2865 76.3379 72.1355 72.6139 75.6719C68.9629 79.1719 65.8691 83.6042 63.3066 88.5886C59.8014 95.3959 57.265 103.208 55.5202 110.906C52.1348 125.802 51.7389 140.255 52.8848 146.146C53.1035 147.292 53.4056 148.141 53.7233 148.667C54.0514 149.208 54.4629 149.495 54.8483 149.583C55.3223 149.703 55.8587 149.604 56.3952 149.089C56.7546 148.75 56.7754 148.172 56.4264 147.813C56.1191 147.495 55.64 147.443 55.2806 147.672C55.2077 147.531 55.1087 147.344 55.0514 147.172C54.8587 146.646 54.7129 145.927 54.5827 145.068C53.5254 137.786 54.6296 120.266 59.6296 103.917C62.7754 93.6198 67.4681 83.7865 74.2337 77.3542C77.8639 73.8698 82.7546 70.0782 88.1348 66.2344C99.1244 58.349 112.109 50.2344 120.999 44.0469C121.65 44.4063 122.848 44.8646 123.046 44.9636C124.911 45.8594 126.749 46.8282 128.536 47.8855C130.312 48.9219 132.031 50.0469 133.697 51.2813C137.161 53.8438 140.171 56.8542 143.119 59.9219C146.119 63.0625 149.057 66.2709 152.249 69.2448C154.994 71.7969 157.926 74.1563 161.27 76.1302C162.88 77.0677 166.27 79.3021 169.275 80.3438C170.89 80.9167 172.421 81.125 173.577 80.7761L173.057 79.0313C171.942 79.349 170.395 78.823 168.807 78.1042C166.26 76.9584 163.656 75.1719 162.327 74.3646C159.156 72.4219 156.39 70.099 153.786 67.6198C150.65 64.6407 147.786 61.4219 144.796 58.3073C141.76 55.1511 138.598 52.1198 134.994 49.5105C133.244 48.2657 131.442 47.1146 129.572 46.073C129.234 45.8802 128.864 45.724 128.515 45.5313C131.39 46.2188 134.473 46.9896 137.176 47.7344C139.833 48.4636 142.109 49.1719 143.406 49.75C150.911 53.0782 166.791 57.2657 178.755 62.5782C184.447 65.1094 189.255 67.8594 191.682 70.9792C192.661 72.224 193.577 75.2709 194.458 79.4271C196.411 88.698 197.89 103.318 197.89 116.865C197.89 129.911 196.583 141.958 192.838 147.063C192.541 147.464 192.63 148.031 193.031 148.328C193.437 148.63 194.005 148.536 194.307 148.141C198.229 142.88 199.874 130.411 199.963 116.875C200.067 103.161 198.65 88.349 196.713 78.9584Z" fill="#3B435F"></path>
          </svg>
      </div>
    </div>
  </section>
  <div className="container md:my-20 my-12 text-primary flex items-center justify-center">
    <div className="lg:w-2/3 w-full mx-auto">
      <div className='px-4'>
        <h2 className="text-2xl font-semibold">Help your parcel arrive in pristine condition with our step-by-step guide on how to package a parcel</h2>
        <p className="mt-5 text-lg font-light">When in transit, your package will be handled multiple times. It might also have packages put on top of it. Your packaging has to be strong enough to withstand courier transportation. If your packaging is not sufficient, you risk your package being damaged in transit, and you will also not be able to claim compensation. Movery can help you ensure your package is secure, please review the below criteria and also review our packaging guidelines page to see how.</p>
      </div>
      <div className="mt-12 bg-base-200 p-8 bg-pale-mint">
        <img className="w-1/3 mx-auto" src={packagingBox} loading="lazy"/>
        <h3 className="text-3xl font-bold mt-8">1. Find a suitable box or bag</h3>
        <p className="mt-3 text-lg font-light">When you're looking at how to package a parcel, consider:</p>
        <ul className="list-disc">
          <li className="mt-4">
            <h3 className="text-xl font-bold">Box or bag</h3>
            <p className="mt-2 font-light text-lg">Do you need a box or would a mailing bag or padded envelope be better? Top tip: Double-lined corrugated box for parcel and watertight mailing bags are best for clothes.</p>
          </li>
          <li className="mt-5">
            <h3 className="text-xl font-bold">New or old</h3>
            <p className="mt-2 font-light text-lg">You can buy boxes for packaging or recycle an old box from home.</p>
          </li>
          <li className="mt-5">
            <h3 className="text-xl font-bold">Sturdiness</h3>
            <p className="mt-2 font-light text-lg">Is the box tough enough for the journey ahead? Whether the parcel is small or large, the box will need to be structurally sound.</p>
          </li>
          <li className="mt-5">
            <h3 className="text-xl font-bold">Size</h3>
            <p className="mt-2 font-light text-lg">Will the item fit inside without leaving lots of empty space? Make sure the box closes easily and retains its shape.</p>
          </li>
          <li className="mt-5">
            <h3 className="text-xl font-bold">Labels</h3>
            <p className="mt-2 font-light text-lg">If you reuse a box or bag, make sure there are no old labels or barcodes showing. These might be picked up by our scanners and can send your parcel to the wrong place.</p>
          </li>
        </ul>
      </div>
      <div className="mt-12 bg-base-200 p-8 bg-pale-mint">
        <img className="w-1/3 mx-auto" src={itemPackaging} loading="lazy"/>
        <h3 className="text-3xl font-bold mt-8">2. Wrap your items</h3>
        <div className="text-lg font-light">
          <p className="mt-3">Wrap any items before you put them in the box or bag. Fragile items, in particular, must be wrapped as our scanners can't detect 'fragile' or 'handle with care' labels. Packaging options include:</p>
          <p className="mt-4"><span className="font-bold">Bubble wrap</span> – reuse bubble wrap you have at home to keep precious items extra safe.</p>
          <p className="mt-4"><span className="font-bold">Newspaper</span> – use layers of newspaper sheets from yesterday’s news to fold around your items. Good for the environment and your wallet.</p>
        </div>
      </div>
      <div className="mt-12 bg-base-200 p-8 bg-pale-mint">
        <img className="w-1/3 mx-auto" src={cushioningParcel} loading="lazy"/>
        <h3 className="text-3xl font-bold mt-8">3. Pack the empty space</h3>
        <div className="text-lg font-light">
          <p className="mt-3">Make sure your precious parcel stays secure by filling any gaps around the item, once it's placed in the box. Parcel packing options include:</p>
          <p className="mt-4"><span className="font-bold">Paper and newspaper</span> – the most environmentally friendly option, scrunched-up newspaper, is an easy way to fill the space</p>
          <p className="mt-4"><span className="font-bold">Cardboard</span> – layers of cardboard can create a sturdy shell</p>
          <p className="mt-4"><span className="font-bold">Sheets</span> – old but clean sheets can be used to wrap items tightly</p>
        </div>
      </div>
      <div className="mt-12 bg-base-200 p-8 bg-pale-mint">
        <img className="w-1/3 mx-auto" src={letterInside} loading="lazy"/>
        <h3 className="text-3xl font-bold mt-8">4. Put your address inside</h3>
        <div className="text-lg font-light">
          <p className="mt-3">Your item's secure, but before you fasten the lid on your box, you need to put some details on a piece of paper inside. Please write:</p>
          <ul className="list-disc md:ml-6 ml-0">
            <li className="mt-4">Your own name, address and phone number</li>
            <li className="mt-4">The name and address of the parcel's destination</li>
          </ul>
          <p className="mt-6">If the address label comes off your parcel – for example, if the label peels off while it's traveling – we'll know where it needs to be sent.</p>
        </div>
      </div>
      <div className="mt-12 bg-base-200 p-8 bg-pale-mint">
        <img className="w-1/3 mx-auto" src={securingParcel} loading="lazy"/>
        <h3 className="text-3xl font-bold mt-8">5. Fasten your parcel with tape</h3>
        <div className="text-lg font-light">
          <p className="mt-3">Once your item's inside its box with the space padded – or snugly tucked inside its mailbag – secure it with tape.</p>
          <ul className="list-disc">
            <li className="mt-4"><span className="font-bold">Choose strong tape</span> – it's so much more durable and secure</li>
            <li className="mt-4"><span className="font-bold">Cover all openings</span> – that includes across gaps, down the sides and underneath. Lock it down.</li>
            <li className="mt-4"><span className="font-bold">Tape the corners</span> – boost durability by tapping the corners. The extra layer acts as a defence against scuffs</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 bg-base-200 p-8 bg-pale-mint">
        <img className="w-1/3 mx-auto" src={tape} loading="lazy"/>
        <h3 className="text-3xl font-bold mt-8">6. Secure any loose edges</h3>
        <div className="text-lg font-light">
          <p className="mt-3">We've kind of already covered this. But we cannot overstate the importance of securing the edges around your package. If you see it, tape down:</p>
          <ul className="list-disc">
            <li className="mt-4">Cardboard flaps at the top/bottom of your box</li>
            <li className="mt-4">Bits of mailbag that stick out from the main package</li>
          </ul>
          <p className="mt-6"><span className="font-bold">Top tip</span>: Basically, anything that's an edge that sticks out – even slightly – from the package must be flattened and secured. This helps prevent it getting stuck on the belt, avoiding damage.</p>
        </div>
      </div>
      <div className="mt-12 bg-base-200 p-8 bg-pale-mint">
        <img className="w-1/3 mx-auto" src={labelling} loading="lazy"/>
        <h3 className="text-3xl font-bold mt-8">7. Label your package</h3>
        <div className="text-lg font-light">
          <p className="mt-3">You're almost done. But labelling is one of the most important parts of learning how to wrap a package for delivery. Don't fall at the final hurdle.</p>
          <ul className="list-disc">
            <li className="mt-4"><span className="font-bold">Book your delivery using the Movery website and print out your label.</span> The label includes the recipient's name and address and your barcode</li>
            <li className="mt-4"><span className="font-bold">Position the label</span> in the middle of the top of the parcel if it has flat sides. For round parcels (note: if you're sending a poster, map etc, use a triangular – rather than circular – tube), secure the label where you have enough surface area.</li>
            <li className="mt-4"><span className="font-bold">Secure the label</span> with good-quality tape – use a small piece along each of the 4 edges. Don't leave any flappy paper exposed.</li>
            <li className="mt-4"><span className="font-bold">Write your address</span> on a return label and secure it to the back of the parcel – clearly mark it as ‘return address' to avoid confusion.</li>
          </ul>
          <p className="mt-6"><span className="font-bold">Is your address inside the box?</span> Don't forget to include it. If your parcel gets lost, that's how we can get it back to you.</p>
        </div>
      </div>
      <div className="mt-12 bg-base-200 p-8 bg-pale-mint">
        <img className="w-1/3 mx-auto" src={readyToSend} loading="lazy"/>
        <h3 className="text-3xl font-bold mt-8">8. Send your parcel</h3>
        <div className="text-lg font-light">
          <p className="mt-3">Your parcel wrapped, packed and ready to go. To send it, book a pickup online.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-pale-mint w-full py-20 flex justify-center">
    <div className="container text-primary w-10/12">
      <h2 className="md:text-5xl text-4xl font-bold text-center">Packaging DON’TS</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-12">
        <div className="border border-deep-green rounded-md md:p-10 p-6">
          <img className="w-28 h-28" src={veryOldBox} loading="lazy"/>
          <h2 className="text-2xl font-semibold mt-6">Do not re-use a box</h2>
          <p className="mt-4 font-light">If you do the strength can be compromised.</p>
        </div>
        <div className="border border-deep-green rounded-md md:p-10 p-6">
          <img className="w-28 h-28" src={tornBox} loading="lazy"/>
          <h2 className="text-2xl font-semibold mt-6">Do not leave any straps exposed</h2>
          <p className="mt-4 font-light">They could catch on sortation equipment and cause damage.</p>
        </div>
        <div className="border border-deep-green rounded-md md:p-10 p-6">
          <img className="w-28 h-28" src={overPackedBox} loading="lazy"/>
          <h2 className="text-2xl font-semibold mt-6">Do not overpack the box</h2>
          <p className="mt-4 font-light">If you overpack you weaken the box, and it can easily burst when other boxes are placed on top of it.</p>
        </div>
        <div className="border border-deep-green rounded-md md:p-10 p-6">
          <img className="w-28 h-28" src={boxWithStuff} loading="lazy"/>
          <h2 className="text-2xl font-semibold mt-6">Do not let anything stick out of the box</h2>
          <p className="mt-4 font-light">If anything is sticking out, or even touching the walls of the box, you will be unable to claim if any damage occurs.</p>
        </div>
      </div>
      <div className="text-center pt-16 flex items-center justify-center">
        <a className="btn btn-info bg-deep-green btn-wide rounded-full md:w-1/3 w-full flex items-center justify-center text-white py-2" href="/home">
          Send Your Parcel Now<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right w-4 h-4 ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>      
      </div>
    </div>
  </div>
</div>
  )
}

export default ParcelGuide