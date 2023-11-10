<Routes>
<Route path="/" element={<Layout
  search={search}
  setSearch={setSearch}
/>}>
  <Route index element={<Home posts={searchResults} />} />
  <Route path="post">
    <Route index element={<NewPost
      handleSubmit={handleSubmit}
      postTitle={postTitle}
      setPostTitle={setPostTitle}
      postBody={postBody}
      setPostBody={setPostBody}
    />} />
    <Route path=":id" element={<PostPage
      posts={posts}
      handleDelete={handleDelete}
    />} />
  </Route>
  <Route path="about" element={<About />} />
  <Route path="*" element={<Missing />} />
</Route>
</Routes>