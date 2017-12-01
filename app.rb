require 'sinatra'
require 'i18n'
require 'pony'
require 'better_errors' if development?

configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = __dir__
end

configure do
  I18n.enforce_available_locales = false
  I18n.load_path = Dir[File.join(settings.root, 'locales', '*.yml')]
  set :port => 3007
  set :bind => 0000
end

before '/:locale/*' do
  I18n.locale = params[:locale]
end

before '/' do
  I18n.locale = :es
end

before '/:locale' do
  I18n.locale = params[:locale]
end

# Filtros idioma
before '/:locale/*' do
  I18n.locale = (params[:locale].eql?('es') || params[:locale].eql?('en')) ? params[:locale] : :es
end

configure do
  set :show_exceptions, false
# set :show_exceptions, :after_handler
end

#GLOBALES
get '/' do
  @titulo = ""
  erb (I18n.locale.to_s + '/vistas/index').to_sym, :layout => ("/layouts/layout").to_sym
end

get '/en' do
  @tituloEn = ""
  erb (I18n.locale.to_s + '/vistas/index').to_sym, :layout => ("/layouts/layout").to_sym
end

get '/es' do
  erb (I18n.locale.to_s + '/vistas/index').to_sym, :layout => ("/layouts/layout").to_sym
end


#QUIENES SOMOS
get '/:locale/quienes-somos' do
  @titulo = 'Quienes Somos'
  @tituloEn = 'Quienes Somos'
  erb :"#{I18n.locale}/vistas/nosotros/quienes-somos", :layout => ('layouts/layout_interior').to_sym
  end

get '/:locale/nuestro-equipo' do
  @titulo = 'Nuestro Equipo'
  @tituloEn = 'Nuestro Equipo'
  erb :"#{I18n.locale}/vistas/nosotros/nuestro-equipo", :layout => ('layouts/layout_interior').to_sym
  end

#Servicios
get '/:locale/scoring-credito' do
  @titulo = 'Scoring de Credito'
  @tituloEn = 'Scoring de Credito'
  erb :"#{I18n.locale}/vistas/servicios/scoring-credito", :layout => ('layouts/layout_interior').to_sym
  end

get '/:locale/reservas-credito' do
  @titulo = 'Reservas de Credito'
  @tituloEn = 'Reservas de Credito'
  erb :"#{I18n.locale}/vistas/servicios/reservas-credito", :layout => ('layouts/layout_interior').to_sym
end

get '/:locale/business-analytics' do
  @titulo = 'Business Analytics'
  @tituloEn = 'Business Analytics'
  erb :"#{I18n.locale}/vistas/servicios/business-analytics", :layout => ('layouts/layout_interior').to_sym
  end


#Casos
get '/:locale/simuladores' do
  @titulo = 'Casos'
  @tituloEn = 'Casos'
  erb :"#{I18n.locale}/vistas/simuladores/simuladores", :layout => ('layouts/layout_interior').to_sym
end

#Blog
get '/:locale/wp' do
  @titulo = 'Documentos'
  @tituloEn = 'Documentos'
  erb :"#{I18n.locale}/vistas/analisis/wp", :layout => ('layouts/layout_interior').to_sym
  end

get '/:locale/noticias' do
  @titulo = 'Noticias'
  @tituloEn = 'Noticias'
  erb :"#{I18n.locale}/vistas/analisis/noticias", :layout => ('layouts/layout_interior').to_sym
end

#Contacto
get '/:locale/contacto' do
  @titulo = 'Contacto'
  @tituloEn = 'Contacto'
  erb :"#{I18n.locale}/vistas/contacto/contacto", :layout => ('layouts/layout_interior').to_sym
end


not_found do
  status 404
  @titulo = "Página no encontrada"
  @tituloEn = "Page not found"
  erb :"#{I18n.locale}/vistas/Independientes/pagina404"
end




helpers do
  def change_language
    if request.path_info=="/"
      return "/en"

    elsif I18n.locale == :es
      return request.path_info.sub('es', 'en')

    elsif I18n.locale == :en
      return request.path_info.sub('en', 'es')

    end
  end

end
