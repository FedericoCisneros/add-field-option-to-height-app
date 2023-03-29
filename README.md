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
uses: actions/add-field-option-to-height-app@v1.3
with:
  field: 3c4ca512-2c67-4163-853d-536c52b59969
  option: 'New Option'
env:
  HEIGHT_API_KEY: ${{ secrets.HEIGHT_API_KEY }}
```
