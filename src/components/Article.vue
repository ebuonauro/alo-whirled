<template>
  <div class="single-article">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-5 col-lg-6">{{ currentArticle.title }}</h1>
        <p class="col-lg-6">{{ currentArticle.description }}</p>
      </div>
    </div>
    <div class="container">
      <article class="col-md-8 mb-5" v-html="currentArticle.article"></article>
    </div>
  </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "article",
  data() {
    return {
      currentArticle: null,
      message: ''
    };
  },
  methods: {
    getArticle(id) {
      ArticleDataService.get(id)
        .then(response => {
          this.currentArticle = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentArticle.id,
        title: this.currentArticle.title,
        description: this.currentArticle.description,
        published: status
      };

      ArticleDataService.update(this.currentArticle.id, data)
        .then(response => {
          this.currentArticle.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateArticle() {
      ArticleDataService.update(this.currentArticle.id, this.currentArticle)
        .then(response => {
          console.log(response.data);
          this.message = 'The article was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteArticle() {
      ArticleDataService.delete(this.currentArticle.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "articles" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getArticle(this.$route.params.id);
  }
};
</script>

<style>
.jumbotron {
  background-color: #f2f2f2;
  border-radius: 0;
  position: relative;
  margin-bottom: 60px;
}
.jumbotron:after {
  content: '';
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 20px;
}
.container {
  padding: 0;
}

</style>