import type { JSX } from "react";

interface MarkProps {
  children?: string | JSX.Element;
}

const Mark = (props: MarkProps) => {
  const { children } = props;
  return (
    <span
      style={{
        backgroundImage: `url('data:image/svg+xml,<svg viewBox="0 0 298 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" color="rgba(241,215,74,0.4)" preserveAspectRatio="none" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M3.383 15.846a31.917 31.917 0 003.957-.505c.006.094.008.191.006.295a21.164 21.164 0 01-3.963.21zm3.592 3.837l-.387.053c-.31-.032-.651-.067-.988-.106.293-.068.586-.133.879-.197.255-.025.511-.051.764-.084-.08.137-.169.249-.268.334zm-3.76-6.418a25.114 25.114 0 012.906-.294h.086c.057.132.106.267.147.401-1.04.057-2.088.012-3.139-.107zm2.015-2.168c.077.16.161.318.249.478-.282-.003-.561-.013-.842-.009a91.459 91.459 0 01-1.815-.087 32.313 32.313 0 012.408-.382zm1.316-3.549a1.93 1.93 0 00-.021.178c-1.021.045-2.043.094-3.064.139-.053-.02-.107-.036-.159-.057 1.075-.154 2.158-.219 3.244-.26zM293.49 4.019c-4.484-.278 4.076-.556.008-.829 10.494-.278-.383-.554.008-.826-4.521-.28-5.395-.559.008-.832-.027-.015-.034-.03-.035-.045h-11.744v-.355c-.067.12-.133.251-.198.355h-9.826a3.823 3.823 0 00-.222.111 5.628 5.628 0 00-.954-.001 5.36 5.36 0 00-1.08-.008 5.435 5.435 0 00-1.08-.008 5.45 5.45 0 00-1.074-.008 5.347 5.347 0 00-1.086-.008 5.36 5.36 0 00-1.08-.008 5.37 5.37 0 00-1.081-.008 5.445 5.445 0 00-1.081-.008 5.357 5.357 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.37 5.37 0 00-1.081-.008 5.374 5.374 0 00-1.074-.008 5.35 5.35 0 00-1.086-.009 5.435 5.435 0 00-1.08-.008 5.431 5.431 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.37 5.37 0 00-1.081-.008 5.45 5.45 0 00-1.074-.008 5.357 5.357 0 00-1.087-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.361 5.361 0 00-1.08-.008 5.445 5.445 0 00-1.081-.008 5.357 5.357 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.454 5.454 0 00-1.074-.009 5.43 5.43 0 00-1.087-.008 5.445 5.445 0 00-1.081-.008 5.357 5.357 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.451 5.451 0 00-1.074-.008 5.347 5.347 0 00-1.086-.008 5.37 5.37 0 00-1.081-.008 5.36 5.36 0 00-1.08-.008 5.37 5.37 0 00-1.081-.008 5.445 5.445 0 00-1.081-.008 5.357 5.357 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.444 5.444 0 00-1.073-.009 5.43 5.43 0 00-1.087-.008 5.435 5.435 0 00-1.08-.008 5.357 5.357 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.361 5.361 0 00-1.08-.008 5.47 5.47 0 00-1.076-.008 5.356 5.356 0 00-1.087-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.435 5.435 0 00-1.08-.008 5.432 5.432 0 00-1.08-.007 5.455 5.455 0 00-1.074-.009 5.347 5.347 0 00-1.086-.008 5.37 5.37 0 00-1.081-.008 5.445 5.445 0 00-1.081-.008 5.357 5.357 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.37 5.37 0 00-1.081-.008 5.45 5.45 0 00-1.074-.008 5.347 5.347 0 00-1.086-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.445 5.445 0 00-1.081-.008 5.367 5.367 0 00-1.081-.007 5.368 5.368 0 00-1.073-.009 5.357 5.357 0 00-1.087-.008 5.36 5.36 0 00-1.08-.008 5.361 5.361 0 00-1.08-.008 5.435 5.435 0 00-1.08-.008 5.442 5.442 0 00-1.081-.007 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.46 5.46 0 00-1.075-.008 5.433 5.433 0 00-1.087-.009 5.357 5.357 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.435 5.435 0 00-1.08-.008 5.367 5.367 0 00-1.081-.007 5.369 5.369 0 00-1.073-.009 5.348 5.348 0 00-1.086-.008 5.361 5.361 0 00-1.08-.008 5.456 5.456 0 00-1.082-.008 5.367 5.367 0 00-1.081-.007 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.45 5.45 0 00-1.074-.008 5.424 5.424 0 00-1.086-.009 5.432 5.432 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.37 5.37 0 00-1.081-.008 5.445 5.445 0 00-1.081-.008 5.45 5.45 0 00-1.074-.008 5.347 5.347 0 00-1.086-.008 5.37 5.37 0 00-1.081-.008 5.36 5.36 0 00-1.08-.008 5.435 5.435 0 00-1.08-.008 5.357 5.357 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.361 5.361 0 00-1.08-.008 5.375 5.375 0 00-1.074-.008 5.434 5.434 0 00-1.087-.009A5.367 5.367 0 00148.465.7a5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.361 5.361 0 00-1.08-.008 5.445 5.445 0 00-1.081-.008 5.45 5.45 0 00-1.074-.008 5.347 5.347 0 00-1.086-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.445 5.445 0 00-1.081-.008 5.367 5.367 0 00-1.081-.007 5.36 5.36 0 00-1.08-.008 5.444 5.444 0 00-1.073-.009 5.43 5.43 0 00-1.087-.008 5.435 5.435 0 00-1.08-.008 5.357 5.357 0 00-1.08-.007 5.361 5.361 0 00-1.08-.008 5.37 5.37 0 00-1.081-.008 5.36 5.36 0 00-1.08-.008 5.445 5.445 0 00-1.081-.008 5.45 5.45 0 00-1.074-.008 5.356 5.356 0 00-1.087-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.435 5.435 0 00-1.08-.008 5.432 5.432 0 00-1.08-.007 5.361 5.361 0 00-1.08-.008 5.375 5.375 0 00-1.074-.008 5.351 5.351 0 00-1.086-.009 5.445 5.445 0 00-1.081-.008 5.377 5.377 0 00-1.082-.007 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.435 5.435 0 00-1.08-.008 5.45 5.45 0 00-1.074-.008 5.347 5.347 0 00-1.086-.008 5.361 5.361 0 00-1.08-.008 5.361 5.361 0 00-1.08-.008 5.445 5.445 0 00-1.081-.008 5.367 5.367 0 00-1.081-.007 5.36 5.36 0 00-1.08-.008A5.454 5.454 0 00100.94.35a5.347 5.347 0 00-1.086-.008 5.37 5.37 0 00-1.081-.008 5.435 5.435 0 00-1.08-.008 5.432 5.432 0 00-1.08-.007 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.361 5.361 0 00-1.08-.008 5.461 5.461 0 00-1.075-.008 5.357 5.357 0 00-1.087-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.36 5.36 0 00-1.08-.008 5.435 5.435 0 00-1.08-.008 5.357 5.357 0 00-1.08-.007A5.37 5.37 0 0084.73.232a5.454 5.454 0 00-1.074-.009 5.413 5.413 0 00-1.093-.007 5.45 5.45 0 00-1.074-.008A5.445 5.445 0 0080.408.2 5.512 5.512 0 0079.32.193a5.426 5.426 0 00-1.072-.007 5.36 5.36 0 00-1.08-.008A5.363 5.363 0 0076.08.171a5.43 5.43 0 00-1.072-.008A5.437 5.437 0 0073.92.156a5.352 5.352 0 00-1.072-.007 5.361 5.361 0 00-1.08-.008A5.364 5.364 0 0070.68.134a5.45 5.45 0 00-1.074-.008 5.437 5.437 0 00-1.088-.007 5.361 5.361 0 00-1.073-.007 5.36 5.36 0 00-1.08-.008 5.44 5.44 0 00-1.088-.008 5.504 5.504 0 00-1.072-.007 5.437 5.437 0 00-1.088-.007 5.352 5.352 0 00-1.072-.007 5.361 5.361 0 00-1.08-.008 5.44 5.44 0 00-1.088-.008 5.437 5.437 0 00-1.073-.007 5.37 5.37 0 00-1.081-.008 5.436 5.436 0 00-1.088-.007A5.351 5.351 0 0055.563.03a5.44 5.44 0 00-1.088-.008 5.437 5.437 0 00-1.073-.007 5.36 5.36 0 00-1.08-.008A5.437 5.437 0 0051.234 0a5.43 5.43 0 00-1.072-.008 5.432 5.432 0 00-1.08-.007 5.377 5.377 0 00-1.089-.008A5.437 5.437 0 0046.92-.03a5.39 5.39 0 00-1.199.001 5.565 5.565 0 00-1.266.025 5.598 5.598 0 00-1.079.036 5.587 5.587 0 00-1.085.036 5.565 5.565 0 00-1.075.035 5.604 5.604 0 00-1.079.035 5.568 5.568 0 00-1.084.036 5.654 5.654 0 00-1.076.035 5.693 5.693 0 00-1.08.035 5.532 5.532 0 00-1.08.036 5.563 5.563 0 00-1.083.036 5.576 5.576 0 00-1.076.035 5.615 5.615 0 00-1.08.035 5.574 5.574 0 00-1.084.036 5.643 5.643 0 00-1.075.035 5.612 5.612 0 00-1.08.035 5.637 5.637 0 00-1.083.037 5.573 5.573 0 00-1.076.035 5.601 5.601 0 00-1.079.035 5.609 5.609 0 00-1.08.035 5.584 5.584 0 00-1.085.036 5.646 5.646 0 00-1.075.035 5.535 5.535 0 00-1.08.036 5.568 5.568 0 00-1.084.036 5.562 5.562 0 00-1.075.035 5.612 5.612 0 00-1.08.035 5.56 5.56 0 00-1.083.036 5.654 5.654 0 00-1.076.035 5.615 5.615 0 00-1.08.035 5.598 5.598 0 00-1.079.036 5.587 5.587 0 00-1.085.036 5.576 5.576 0 00-1.076.035c-.244-.014-.463.009-.689.022-.081-.092-.186-.165-.306-.164-2.947.028-5.816.331-8.664.998L.068 1.915c-.545 0-.545.811 0 .811h.598c.031.177.17.335.402.331.096-.001.192-.007.287-.009a.368.368 0 00.379.325c.407.004.811.011 1.214.018a67.61 67.61 0 01-4.214.534c-.517.052-.542.794 0 .791a55.285 55.285 0 002.19-.056c.015.006.021.022.039.026.053.013.106.022.16.035-.189.193-.083.591.279.637l.099.012a.307.307 0 00-.136.25H.402c-.431 0-.523.606-.103.721a25.4 25.4 0 003.485.678 18.78 18.78 0 00-1.817.283c-.292.063-.356.443-.137.619-.476.014-.952.033-1.428.037-.487.004-.488.729 0 .725.096 0 .192-.003.287-.004a34.58 34.58 0 002.153.316c-.848.071-1.695.169-2.539.317-.351.062-.356.627 0 .683a27.1 27.1 0 001.463.19c-.073.174-.01.406.209.458.283.066.564.118.847.165-.73.141-1.456.312-2.177.531-.387.116-.282.608.089.641.457.041.914.066 1.371.098.02.095.073.181.209.209.083.017.167.025.25.04-.611.005-1.22.007-1.83.008-.428 0-.428.638 0 .637h.78c-.067.018-.133.027-.2.045-.297.08-.329.547 0 .607.921.166 1.845.287 2.766.351-.988.136-1.978.261-2.973.374-.457.004-.914.006-1.373.006-.336 0-.373.4-.146.537-.313.048-.624.093-.936.142-.324.053-.263.486 0 .573.954.312 1.916.529 2.882.668a61.91 61.91 0 01-2.8.086c-.394.002-.394.589 0 .586.244-.001.483-.017.725-.021-.045.146.001.312.195.342.027.005.054.007.08.011h.002c1.251.195 2.5.289 3.746.313-.023.083-.015.169.039.233-1.082.23-2.152.504-3.199.887-.316.116-.261.538.08.561 1.052.067 2.082.023 3.1-.087-.088.155.008.398.232.395l.043-.001c.044.158.311.271.666.35.139.048.277.089.414.13-.324.099-.576.22-.569.361a4.186 4.186 0 01-.597.084c-.183.026-.131.303.043.303.691-.002 1.375-.036 2.063-.063a1.733 1.733 0 00-.082.337c-.119.003-.239.002-.359.003-.358-.13-.585-.125-.686.008-.312.002-.623.008-.936.008-.295.001-.295.437 0 .439.372.002.743.008 1.111.014l.282.039c-.141.053-.283.094-.423.149-.1.003-.201.011-.302.013-.311.008-.312.468 0 .464.09-.001.178-.01.268-.012.023.005.037.023.064.021.188-.006.37-.031.556-.041v.008c.088-.005.175-.02.263-.026.388-.019.779-.04 1.164-.072.002.104-.007.22-.034.353.699.337 1.413.342 2.098.235.365.037.727.02 1.082-.035.364.037.723.019 1.076-.035.366.037.726.019 1.081-.036.365.038.727.02 1.082-.036.364.036.724.02 1.078-.036.363.037.724.021 1.079-.035.364.037.725.02 1.079-.035.366.037.728.02 1.084-.035a4.25 4.25 0 001.076-.035c.364.037.725.019 1.08-.036.365.037.727.02 1.082-.036.363.036.723.02 1.076-.036.366.037.727.021 1.08-.035.366.037.729.02 1.083-.035.365.037.724.019 1.078-.035a4.24 4.24 0 001.08-.036c.363.038.724.02 1.079-.035.365.037.727.02 1.083-.036.363.036.722.02 1.076-.036.364.037.725.021 1.08-.035.365.037.728.02 1.082-.035.364.037.724.019 1.077-.035.364.037.726.019 1.079-.036.366.038.729.02 1.084-.036.364.036.723.02 1.076-.036a4.2 4.2 0 001.081-.035c.363.037.724.021 1.079-.035.365.037.727.02 1.083-.035.363.037.722.019 1.076-.035.365.037.725.019 1.08-.036.365.037.727.02 1.082-.036.364.036.725.02 1.078-.036.363.037.725.021 1.079-.035.331.034.659.025.984-.02.345.046.691.045 1.029.002.365.054.728.053 1.084.008.363.053.723.053 1.078.007a3.91 3.91 0 001.08.008c.364.054.727.054 1.083.007.362.052.723.052 1.077.007.363.053.725.054 1.08.008.365.054.728.053 1.084.008a3.92 3.92 0 001.076.007 3.9 3.9 0 001.084.007c.363.053.723.053 1.077.008.364.052.726.053 1.081.007.364.054.727.053 1.084.008.362.053.722.053 1.077.007.363.054.724.054 1.08.008.364.054.726.054 1.083.007.362.052.723.052 1.077.008.365.053.728.052 1.084.007a3.92 3.92 0 001.076.007 3.91 3.91 0 001.08.008 3.9 3.9 0 001.084.007c.363.053.723.053 1.077.008.365.053.728.052 1.084.007.363.053.723.053 1.077.007.364.054.725.054 1.081.008.364.054.726.054 1.083.007.362.053.722.053 1.077.008.364.053.726.052 1.084.008.361.052.722.052 1.076.006a3.91 3.91 0 001.08.008 3.9 3.9 0 001.084.007 3.96 3.96 0 001.076.008c.364.053.727.054 1.081.008.364.053.728.052 1.084.007.361.053.721.053 1.073.008.366.054.728.054 1.084.008.364.053.725.054 1.08.008.364.053.725.054 1.081.008a4.03 4.03 0 001.08.008c.363.052.725.053 1.08.007.363.053.725.054 1.08.008.363.053.725.054 1.08.008.363.053.723.054 1.078.008.364.054.728.054 1.084.009.363.053.725.053 1.08.007a3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008c.364.053.726.053 1.08.007.364.054.724.054 1.078.009a3.93 3.93 0 001.083.008c.363.053.725.054 1.08.008.364.053.726.054 1.081.008.364.052.725.053 1.081.007.363.053.724.054 1.08.008.363.053.724.054 1.08.008a3.92 3.92 0 001.076.008 3.9 3.9 0 001.084.009c.363.053.726.053 1.08.008.363.053.726.053 1.08.007a3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008c.365.054.727.054 1.081.008.365.053.726.053 1.082.008.361.053.722.053 1.076.008.365.054.727.054 1.084.008.363.053.724.054 1.08.008.363.053.724.054 1.08.008.363.053.724.054 1.08.008.363.052.725.053 1.08.007.363.053.726.054 1.08.008.363.053.726.054 1.08.008.363.053.724.054 1.077.008a3.9 3.9 0 001.084.009c.365.053.726.053 1.081.007a3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008c.364.054.725.054 1.081.008.363.054.724.054 1.08.008.363.053.725.053 1.08.008.363.053.723.053 1.077.008a3.93 3.93 0 001.083.008c.363.053.725.054 1.08.008.364.053.727.054 1.081.008.364.052.726.053 1.081.008.363.052.725.053 1.08.007.363.053.725.054 1.08.008a3.92 3.92 0 001.076.008 3.9 3.9 0 001.084.009 3.91 3.91 0 001.08.008c.364.053.726.053 1.081.007a3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008c.364.054.726.054 1.081.008.362.053.723.053 1.077.008.365.054.727.054 1.084.008.363.053.725.054 1.08.008.363.053.725.054 1.08.008.363.053.725.054 1.08.008.363.052.726.053 1.081.008.364.052.725.053 1.08.007.364.053.725.054 1.08.008.363.053.723.054 1.077.008a3.9 3.9 0 001.084.009c.363.053.724.053 1.08.008.363.053.725.053 1.081.007.363.054.724.054 1.08.008.363.054.724.054 1.08.008.363.054.724.054 1.08.008.362.054.723.054 1.077.009.364.053.728.053 1.084.007.363.053.725.054 1.08.008.363.053.725.054 1.08.008.363.053.725.054 1.08.008.364.053.725.054 1.08.008.364.052.726.053 1.081.007.364.053.725.054 1.08.008.362.053.723.054 1.077.008a3.9 3.9 0 001.084.009c.362.054.724.054 1.08.008a3.98 3.98 0 001.079.008c.364.053.726.053 1.081.007.364.054.724.054 1.081.008a3.91 3.91 0 001.08.008c.362.054.724.054 1.08.008.362.053.723.053 1.077.009a3.97 3.97 0 001.083.007c.365.053.726.054 1.081.008.364.053.725.054 1.08.008.364.053.725.054 1.08.008.364.053.725.054 1.081.008.363.052.725.053 1.081.007.363.053.724.054 1.08.008a3.92 3.92 0 001.076.008 3.9 3.9 0 001.084.009c.363.054.724.054 1.08.008.363.053.725.053 1.081.007a3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008 3.92 3.92 0 001.076.009c.366.053.728.053 1.084.008.364.052.726.053 1.081.007.364.053.725.054 1.08.008.364.053.725.054 1.081.008.363.053.724.054 1.08.008.363.052.724.053 1.08.008.363.052.725.053 1.081.007.361.053.722.054 1.076.008a3.9 3.9 0 001.084.009 3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008c.363.053.726.053 1.081.007a3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008c.363.054.723.054 1.078.009.364.053.727.053 1.084.007.363.053.724.054 1.08.008.363.053.724.054 1.08.008.363.053.724.054 1.08.008.363.053.724.054 1.08.008.363.052.724.053 1.08.008.362.052.724.053 1.077.007a3.9 3.9 0 001.084.009 3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008c.363.053.725.053 1.08.008.364.053.726.053 1.081.007a3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008c.362.054.723.054 1.077.009.364.054.727.054 1.084.008.363.052.724.053 1.08.007.363.053.725.054 1.081.008.363.053.724.054 1.08.008.363.053.724.054 1.08.008.363.053.725.054 1.08.008.363.052.725.053 1.08.007.362.053.724.054 1.077.008a3.9 3.9 0 001.084.009 3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008c.364.053.725.053 1.08.008.364.053.726.053 1.081.007.364.054.725.054 1.081.008.363.054.724.054 1.08.008a3.92 3.92 0 001.076.009c.365.053.727.053 1.084.008.363.052.725.053 1.081.007.363.053.724.054 1.08.008.363.053.725.054 1.08.008.363.053.725.054 1.08.008.363.053.725.054 1.08.008.362.052.723.053 1.077.007a3.9 3.9 0 001.084.009 3.91 3.91 0 001.08.008 3.91 3.91 0 001.08.008c.364.054.725.054 1.081.008.363.053.724.053 1.08.007.363.054.725.054 1.081.008.363.054.724.054 1.08.008a3.92 3.92 0 001.076.009c.364.054.727.054 1.084.008a4.03 4.03 0 001.08.008c.363.052.726.053 1.081.007.337.049.671.049 1 .013.055.031.117.062.188.092h21.831a1.55 1.55 0 00.248-.145c-13.494-.279 3.09-.554.007-.828 6.899-.278-2.21-.555.009-.825 6.675-.281 2.625-.559.009-.833 5.551-.278 3.543-.556.008-.829-8.34-.278-5.422-.557.008-.829 3.629-.279-3.139-.556.007-.829-9.122-.279-4.332-.556.008-.828 1.272-.279-13.349-.557.008-.83-3.728-.277-5.662-.554.008-.826 9.574-.279 3.881-.557.008-.832-2.071-.278-7.391-.556.008-.829 9.195-.278 4.993-.556.007-.828 11.805-.279 8.952-.558.008-.828-14.139-.279 13.664-.558.008-.83 3.621-.28-11.197-.557.008-.828-2.514-.28-6.704-.557.008-.83.582-.278 1.349-.555.008-.826-10.301-.28-9.196-.558.009-.832-3.621-.279 7.338-.556.008-.829-6.41-.278 2.572-.555.008-.829-5.888-.279-3.677-.556.008-.83 11.135-.278-11.475-.555.007-.828 20.104-.279 10.642-.556.008-.829z" fill="currentColor" fill-rule="nonzero"></path></svg>')`,
      }}
      className="my-[-2px] mx-[-6px] py-[2px] px-[6px] box-decoration-clone bg-[size:100%_1.5em] no-repeat"
    >
      {children}
    </span>
  );
};

export default Mark;
