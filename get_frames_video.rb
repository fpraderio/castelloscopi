require 'shellwords'

#path = '~/Videos/castelloscopi_baixa_resolució/POM_de_DALT/baixa_resolució'
#path = '~/Videos/castelloscopi_baixa_resolució/TRONC'
#path = '~/Videos/castelloscopi_baixa_resolució/PINYA'
path = '~/Videos/castelloscopi_baixa_resolució/MÚSICS'

videos = Dir.entries("#{path}/.").select { |f| File.file?("#{path}/#{f}") }

videos.each{ 
	|video|
	puts video
	video_file = "#{path}/#{video}"
	video_escaped = "#{File.dirname video_file}/#{File.basename video_file}".shellescape

	frames = "#{File.basename video_file, '.mov'}".gsub(' ','_').shellescape
	frames_folder = "#{File.dirname video_file}/#{frames}"

	system "mkdir #{frames_folder}"
	system "ffmpeg -i #{video_escaped} -r 1 -vframes 64 -ss 00:00:40 -s vga #{frames_folder}/image-%d.jpeg"
	system "convert #{frames_folder}/* +append #{frames_folder}/#{frames}.png"
	system "rm #{frames_folder}/image*"

}