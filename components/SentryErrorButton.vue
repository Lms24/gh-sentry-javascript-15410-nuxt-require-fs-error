<!--
This is just a very simple component that throws an example error.
Feel free to delete this file.
-->

<script setup>

  const throwError = () => {
    throw Error('test error')
  };
</script>

<template>
  <button id="errorBtn" @click="throwError"> Throw Error! </button>
</template>

<style scoped>
  button {
    padding: 12px;
    cursor: pointer;
    background-color: rgb(54, 45, 89);
    border-radius: 4px;
    border: none;
    color: white;
    font-size: 1em;
    margin: 1em;
    transition: all 0.25s ease-in-out;
  }
  button:hover {
    background-color: #8c5393;
    box-shadow: 4px;
    box-shadow: 0px 0px 15px 2px rgba(140, 83, 147, 0.5);
  }
  button:active {
    background-color: #c73852;
  }
</style>
