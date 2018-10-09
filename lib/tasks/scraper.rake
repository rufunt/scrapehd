namespace :scraper do
  desc "Scrape posts from foothd"
  task scrape: :environment do
    require 'open-uri'
    require 'nokogiri'
    require 'csv'
    
    url = "https://footballhd.ru/allnews"
    page = Nokogiri::HTML(open(url))
    
    title = []
    spoiler = []
    
    20.times do |i|
    
      url = "https://footballhd.ru/allnews/page/#{i+1}/"
      page = Nokogiri::HTML(open(url))
    
      page.css('h2').each do |line|
        title << line.text.strip
      end
    
      page.css('.sh_art p').each do |line|
        spoiler << line.text.strip
      end
    end
        
    #file << ["Заголовок", "Кратко"]
    
    title.length.times do |i|
      @post = Post.new
      @post.title = title[i]
      @post.spoiler = spoiler[i]
      @post.save
    end
  end

  desc "Destroy all posting data"
  task destroy_all_posts: :environment do
    Post.destroy_all
  end

end
