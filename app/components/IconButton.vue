<template>
  <Label
    :class="className"
    :text="icon | fonticon"
    verticalAlignment="center"
    horizontalAlignment="center"
    :width="width"
  />
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: String,
    className: String,
    width: Number
  }
};
</script>

<style scoped>
label {
  font-size: 30px;
  text-align: center;
  color: white;
  padding-left: 5px;
  text-shadow: 3px 3px 2px black;
}
</style>