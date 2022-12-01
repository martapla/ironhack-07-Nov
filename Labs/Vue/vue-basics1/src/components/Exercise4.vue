<!-- Iteration 4 | Display a list of elements that are stored inside a component
Remember how hard for loops seemed with vanilla JavaScript? Vue does a lot of the heavy lifting when we're using them, and can allow us to display a list of elements on the screen in a much easier way.

In this exercise, you're going to practice how to use the v-for directive. The challenge has the following components:

You need to create a list of posts inside the data of one of your Vue components. These posts need to include the following data: title, description, and content; and you need at least three of them.
Then, you have to make the posts "show up" on your template using the v-for directive. -->


<template>
  <hr />
    <h1>Exercise 4</h1>
    <ul>
        <li v-for="(book, index) in books" :key="index">
            <div>
                <h3>{{book.title}}</h3>
                <p>
                    {{book.description}}
                </p>
                <p>{{book.content}}</p>
            </div>
        </li>
    </ul>
</template>

<script setup>
const books = ([
    {
        title: "First Book", 
        description: "Description One",
        content: "Content-1",
    },
    {
        title: "Second Book",
        description: "Description Two",
        content: "Content-2",
    },
    {
        title: "Third Book",
        description: "Description Three",
        content: "Content-3",
    }
])
</script>


<style>

</style>