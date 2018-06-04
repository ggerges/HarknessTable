<template>

    <div v-drag-and-drop:options="options">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ul>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul>
    </div>
	<!-- Tabs
    <div class="tabs-component">
      <tabs>
          <tab name="First tab">
              First tab content
          </tab>
          <tab name="Second tab">
              Second tab content
          </tab>
          <tab name="Third tab">
              Third tab content
          </tab>
      </tabs>
    </div>-->

    <!-- Colours! 
	is-primary
	is-link
	is-info
	is-success
	is-warning
	is-danger
	is-black
	is-dark
	is-light
	is-white

	<link rel="stylesheet" href="../startfruit/client/src/components/styles.css">

	const data = require('@/assets/data_test.json')
  export default {
    name: 'Class',
    data() {
            return {
                data,
                keepFirst: false,
                openOnFocus: false,
                name: '',
                selected: null,
                msg: 'Welcome to Your Harkness Table App'
            }
        },
        computed: {
            filteredDataObj() {
                return this.data.filter((option) => {
                    return option.user.first_name
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
  }
    -->


</template>