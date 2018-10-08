json.extract! post, :id, :title, :spoiler, :created_at, :updated_at
json.url post_url(post, format: :json)
