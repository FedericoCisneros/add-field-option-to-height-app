# Add field option to Height App

This action adds a field option to the Height App.

## Inputs

### `field`

**Required** The id of the field to add.

### `option`

**Required** The new option to add.

## Outputs

### `status`

The result of add the option to the field.

## Example usage

```yaml
uses: actions/add-field-option-to-height-app@v1.0
with:
  field: 'Prueba'
  option: 'Prueba'
```
