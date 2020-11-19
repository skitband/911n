<template>
  <div>
    <b-sidebar id="sidebar-backdrop"
      backdrop
      shadow>
      <div class="">
        <b-list-group>
        <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
        <b-list-group-item href="#" active>Link with active state</b-list-group-item>
        <b-list-group-item href="#">Action links are easy</b-list-group-item>
        <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  components: {

  }
}
</script>

<style>

</style>