json.array!(@entities) do |entity|
  json.extract! entity, :id, :name, :price
  json.url entity_url(entity, format: :json)
end
