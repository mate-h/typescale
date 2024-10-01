<div class="baseliner" />

<style>
  .baseliner {
    --baseliner-pixel: 1px;
    --baseliner-space: 4px;
    --baseliner-color: rgba(0, 0, 0, 0.06);
  }

  /* dark mode */
  @media (prefers-color-scheme: dark) {
    .baseliner {
      --baseliner-color: rgba(255, 255, 255, 0.06);
    }
  }

  /* ddpx 2 */
  @media (min-resolution: 2dppx) {
    .baseliner {
      --baseliner-pixel: 0.5px;
    }
  }

  /* Baseline grid */
  .baseliner::after {
    /* opacity: 0; */
    clip: unset;
    position: absolute;
    width: auto;
    min-height: 100%;
    z-index: 9999;
    content: '';
    display: block;
    pointer-events: none;
    right: 0px;
    bottom: -1300px;
    left: 0px;
    top: 0px;
    background:
      linear-gradient(
          to right,
          rgba(0, 0, 0, 0) var(--baseliner-pixel),
          transparent var(--baseliner-pixel)
        )
        left top / var(--baseliner-space) 100% repeat-x,
      linear-gradient(
          var(--baseliner-color) var(--baseliner-pixel),
          transparent var(--baseliner-pixel)
        )
        left top / 100% var(--baseliner-space) repeat-y;
  }
</style>
