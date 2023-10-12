<main>
  <slot />
</main>

<style>
  * {
    background: rgb(206, 101, 56);
    background: radial-gradient(
      circle,
      rgba(206, 101, 56, 1) 0%,
      rgba(223, 154, 118, 1) 0%,
      rgba(229, 172, 139, 1) 49%,
      rgba(236, 191, 160, 1) 85%,
      rgba(241, 207, 178, 1) 100%
    );
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    cursor: grabbing;
    user-select: none;
  }
</style>
