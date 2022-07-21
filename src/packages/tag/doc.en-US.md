# Tag 

### introduce

Label for labeling and classification.

### Install

``` javascript
import { Tag } from '@nutui/nutui-react';
```

## Code instance

### Basic usage

```tsx
<Tag type="primary">Label</Tag>
<Tag type="success">Label</Tag>
<Tag type="danger">Label</Tag>
<Tag type="warning">Label</Tag>
```

### Hollow style

```tsx
<Tag plain>Label</Tag>
```

### Rounded style

```tsx
<Tag round type="primary">Label</Tag>
```

### Label style

```tsx
<Tag mark type="primary">Label</Tag>
```

### Can close label

```tsx
<Tag isShow={isShow} closeable onClick={close} type="primary">Label</Tag>
```

### Custom color

```tsx
<Tag color="#FA685D">Label</Tag>
<Tag color="#E9E9E9" text-color="#999999">Label</Tag>
<Tag color="#FA2400" plain>Label</Tag>
```

## API

### Props

| Field       | illustrate                                      | type    | Defaults    |
|------------|--------------------------------------------------|---------|-----------|
| type       | Label type, the optional value is primary success danger warning | String  | `default` |
| color      | Label color                                         | String  | -         |
| text-color | Text color, priority is higher than the color attribute  | String  | `white`   |
| plain      | Whether it is hollow                               | Boolean | `false`   |
| round      | Whether it is a rounded style                      | Boolean | `false`   |
| mark       | Whether it is a tag style                          | Boolean | `false`   |
| closeable  | Whether it can be closed label                     | Boolean | `false`   |


### Event

| Event name | illustrate  | Callback parameter |
|----------|----------|----------|
| close    | Close event | event    |

