import preact from "@astrojs/preact";

export default function HeaderDefault({ props }: any) {
  return (
    <header>
      <nav class="header bg-gray-200 border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src="logo.svg" class="h-8 mr-3" alt="Web Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TopZone
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Iphone
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Mac
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Ipad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Watch
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Âm thanh
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Phụ kiện
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  TekZone
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  TopCare
                </a>
              </li>
              <li class="flex justify-center">
                <button
                  id="theme-toggle"
                  type="button"
                  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full border border-gray-500 text-sm px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="theme-toggle-dark-icon"
                    viewBox="0 0 24 25"
                    class="hidden w-5= h-5"
                    x="0px"
                    y="0px"
                  >
                    <path d="m21.93,16.08c-1.68,4.09-5.58,6.67-9.93,6.67-.37,0-.75-.02-1.12-.06-4.95-.5-8.97-4.45-9.55-9.39C.66,7.59,4.55,2.37,10.19,1.41c.52-.09,1.02.15,1.29.61.26.45.22,1.01-.1,1.41-1.29,1.58-1.84,3.56-1.56,5.6.44,3.21,3.11,5.81,6.35,6.17,1.4.16,2.81-.09,4.06-.71.47-.23,1.01-.15,1.4.21.39.36.51.91.31,1.39Z" />
                    <text
                      x="0"
                      y="39"
                      fill="#000000"
                      font-size="5px"
                      font-weight="bold"
                      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                    >
                      Created by Arkinasi
                    </text>
                    <text
                      x="0"
                      y="44"
                      fill="#000000"
                      font-size="5px"
                      font-weight="bold"
                      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                    >
                      from the Noun Project
                    </text>
                  </svg>
                  <svg
                    height="800px"
                    width="800px"
                    class="hidden w-5 h-5"
                    id="theme-toggle-light-icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 496"
                  >
                    <circle style="fill:#FFCE00;" cx="248" cy="248" r="142.4" />
                    <path
                      style="fill:#FF9D00;"
                      d="M248,105.6c78.4,0,142.4,64,142.4,142.4s-64,142.4-142.4,142.4"
                    />
                    <path
                      style="fill:#FFBC00;"
                      d="M390.4,248c0,78.4-64,131.2-142.4,131.2S105.6,326.4,105.6,248s64-131.2,142.4-131.2
	S390.4,169.6,390.4,248z"
                    />
                    <path
                      style="fill:#FFB000;"
                      d="M248,116.8c78.4,0,142.4,52.8,142.4,131.2s-64,131.2-142.4,131.2S105.6,326.4,105.6,248"
                    />
                    <path
                      style="fill:#FFBC00;"
                      d="M248,116.8c78.4,0,142.4,52.8,142.4,131.2s-64,131.2-142.4,131.2"
                    />
                    <path
                      style="fill:#FFCE00;"
                      d="M390.4,248c0,78.4-64,131.2-142.4,131.2"
                    />
                    <circle style="fill:#FF9D00;" cx="248" cy="59.2" r="10.4" />
                    <polygon
                      style="fill:#FFCE00;"
                      points="260.8,24.8 248,28.8 235.2,24.8 248,0 "
                    />
                    <circle
                      style="fill:#FF9D00;"
                      cx="248"
                      cy="436.8"
                      r="10.4"
                    />
                    <polygon
                      style="fill:#FFCE00;"
                      points="235.2,471.2 248,467.2 260.8,471.2 248,496 "
                    />
                    <path
                      style="fill:#FF9D00;"
                      d="M388.8,122.4c-4,4-11.2,4-15.2,0s-4-11.2,0-15.2s11.2-4,15.2,0S392.8,118.4,388.8,122.4z"
                    />
                    <polygon
                      style="fill:#FFCE00;"
                      points="415.2,99.2 403.2,92.8 396.8,80.8 423.2,72.8 "
                    />
                    <circle
                      style="fill:#FF9D00;"
                      cx="114.4"
                      cy="381.6"
                      r="10.4"
                    />
                    <polygon
                      style="fill:#FFCE00;"
                      points="80.8,396.8 92.8,403.2 99.2,415.2 72.8,423.2 "
                    />
                    <path
                      style="fill:#FF9D00;"
                      d="M436.8,258.4c-5.6,0-10.4-4.8-10.4-10.4s4.8-10.4,10.4-10.4s10.4,4.8,10.4,10.4
	C447.2,253.6,442.4,258.4,436.8,258.4z"
                    />
                    <polygon
                      style="fill:#FFCE00;"
                      points="471.2,260.8 467.2,248 471.2,235.2 496,248 "
                    />
                    <circle style="fill:#FF9D00;" cx="59.2" cy="248" r="10.4" />
                    <polygon
                      style="fill:#FFCE00;"
                      points="24.8,235.2 28.8,248 24.8,260.8 0,248 "
                    />
                    <path
                      style="fill:#FF9D00;"
                      d="M373.6,388.8c-4-4-4-11.2,0-15.2s11.2-4,15.2,0s4,11.2,0,15.2C384.8,392.8,377.6,392.8,373.6,388.8z"
                    />
                    <polygon
                      style="fill:#FFCE00;"
                      points="396.8,415.2 403.2,403.2 415.2,396.8 423.2,423.2 "
                    />
                    <path
                      style="fill:#FF9D00;"
                      d="M122.4,107.2c4,4,4,11.2,0,15.2s-11.2,4-15.2,0s-4-11.2,0-15.2S118.4,103.2,122.4,107.2z"
                    />
                    <g>
                      <polygon
                        style="fill:#FFCE00;"
                        points="99.2,80.8 92.8,92.8 80.8,99.2 72.8,72.8 	"
                      />
                      <path
                        style="fill:#FFCE00;"
                        d="M331.2,78.4c-2.4,5.6-8.8,8-13.6,5.6c-5.6-2.4-8-8.8-5.6-13.6c2.4-5.6,8.8-8,13.6-5.6
		C331.2,67.2,333.6,73.6,331.2,78.4z"
                      />
                    </g>
                    <polygon
                      style="fill:#FF9D00;"
                      points="347.2,47.2 333.6,46.4 324,37.6 344.8,20 "
                    />
                    <circle
                      style="fill:#FFCE00;"
                      cx="174.4"
                      cy="421.6"
                      r="10.4"
                    />
                    <polygon
                      style="fill:#FF9D00;"
                      points="148.8,448.8 162.4,449.6 172,458.4 151.2,476 "
                    />
                    <path
                      style="fill:#FFCE00;"
                      d="M426.4,187.2c-5.6,2.4-12-0.8-13.6-5.6c-2.4-5.6,0.8-12,5.6-13.6c5.6-2.4,12,0.8,13.6,5.6
	C435.2,179.2,432,184.8,426.4,187.2z"
                    />
                    <polygon
                      style="fill:#FF9D00;"
                      points="460,176 451.2,165.6 450.4,152.8 477.6,155.2 "
                    />
                    <path
                      style="fill:#FFCE00;"
                      d="M69.6,308.8c5.6-2.4,12,0.8,13.6,5.6c2.4,5.6-0.8,12-5.6,13.6c-5.6,2.4-12,0-14.4-5.6
	C60.8,316.8,64,311.2,69.6,308.8z"
                    />
                    <polygon
                      style="fill:#FF9D00;"
                      points="36,320 44.8,330.4 45.6,343.2 18.4,340.8 "
                    />
                    <path
                      style="fill:#FFCE00;"
                      d="M417.6,331.2c-5.6-2.4-8-8.8-5.6-13.6c2.4-5.6,8.8-8,13.6-5.6c5.6,2.4,8,8.8,5.6,13.6
	C428.8,331.2,422.4,333.6,417.6,331.2z"
                    />
                    <polygon
                      style="fill:#FF9D00;"
                      points="448.8,347.2 449.6,333.6 458.4,324 476,344.8 "
                    />
                    <path
                      style="fill:#FFCE00;"
                      d="M78.4,164.8c5.6,2.4,8,8.8,5.6,13.6c-2.4,5.6-8.8,8-13.6,5.6c-5.6-2.4-8-8.8-5.6-13.6
	C67.2,164.8,73.6,162.4,78.4,164.8z"
                    />
                    <polygon
                      style="fill:#FF9D00;"
                      points="47.2,148.8 46.4,162.4 37.6,172 20,151.2 "
                    />
                    <circle
                      style="fill:#FFCE00;"
                      cx="318.4"
                      cy="422.4"
                      r="10.4"
                    />
                    <polygon
                      style="fill:#FF9D00;"
                      points="320,460 330.4,451.2 343.2,450.4 340.8,477.6 "
                    />
                    <path
                      style="fill:#FFCE00;"
                      d="M187.2,69.6c2.4,5.6-0.8,12-5.6,13.6c-5.6,2.4-12-0.8-13.6-5.6c-2.4-5.6,0-12,5.6-14.4
	C179.2,60.8,184.8,64,187.2,69.6z"
                    />
                    <polygon
                      style="fill:#FF9D00;"
                      points="176,36 165.6,44.8 152.8,45.6 155.2,17.6 "
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
