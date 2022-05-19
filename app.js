const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      dob: '01/26/1990',
      age: '32',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      const { name, email, dob, gender, picture } = results[0]

      console.log(results[0])

      this.firstName = name.first
      this.lastName = name.last
      this.email = email
      this.dob = new Date(dob.date).toLocaleDateString()
      this.age = dob.age
      this.gender = gender
      this.picture = picture.large
    }
  }
})

app.mount('#app')
