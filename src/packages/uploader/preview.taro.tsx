import React from 'react'
import {
  Del,
  Failure,
  Link as LinkIcon,
  Loading,
} from '@nutui/icons-react-taro'
import { Image, View } from '@tarojs/components'
import { FileItem } from '@/packages/uploader/file-item'

export const Preview: React.FunctionComponent<any> = ({
  fileList,
  previewType,
  deletable,
  onDeleteItem,
  handleItemClick,
  previewUrl,
  deleteIcon,
  children,
}) => {
  const renderIcon = (item: FileItem) => {
    if (item.status === 'error') {
      return item.failIcon || <Failure color="#fff" />
    }
    return (
      item.loadingIcon || <Loading className="nut-icon-loading" color="#fff" />
    )
  }
  return (
    <>
      {fileList.length !== 0 &&
        fileList.map((item: FileItem, index: number) => {
          const {
            status = 'success',
            uid,
            url,
            message = '',
            name = '',
            type = 'image',
          } = item

          return (
            <View className={`nut-uploader-preview ${previewType}`} key={uid}>
              {previewType === 'picture' && !children && deletable && (
                <View
                  onClick={() => onDeleteItem(item, index)}
                  className="close"
                >
                  {deleteIcon}
                </View>
              )}
              {previewType === 'picture' && !children && (
                <View className="nut-uploader-preview-img">
                  {status === 'ready' ? (
                    <View className="nut-uploader-preview-progress">
                      <View className="nut-uploader-preview-progress-msg">
                        {message}
                      </View>
                    </View>
                  ) : (
                    status !== 'success' && (
                      <View
                        className="nut-uploader-preview-progress"
                        style={{ zIndex: 10 }}
                      >
                        {renderIcon(item)}
                        <View className="nut-uploader-preview-progress-msg">
                          {message}
                        </View>
                      </View>
                    )
                  )}

                  {type.includes('image') ? (
                    <>
                      {url && (
                        <Image
                          className="nut-uploader-preview-img-c"
                          src={url}
                          mode="aspectFill"
                          onClick={() => handleItemClick(item, index)}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {previewUrl ? (
                        <Image
                          className="nut-uploader-preview-img-c"
                          src={previewUrl}
                          onClick={() => handleItemClick(item, index)}
                        />
                      ) : (
                        <View className="nut-uploader-preview-img-file">
                          <View
                            onClick={() => handleItemClick(item, index)}
                            className="nut-uploader-preview-img-file-name"
                          >
                            <LinkIcon color="#808080" />
                            <span>&nbsp;{name}</span>
                          </View>
                        </View>
                      )}
                    </>
                  )}
                  {status === 'success' && name ? (
                    <View className="tips">{name}</View>
                  ) : null}
                </View>
              )}

              {previewType === 'list' && (
                <View className="nut-uploader-preview-list">
                  <View
                    className={`nut-uploader-preview-img-file-name ${status}`}
                    onClick={() => handleItemClick(item, index)}
                  >
                    <LinkIcon />
                    <span>&nbsp;{name}</span>
                  </View>
                  {deletable && (
                    <Del
                      color="#808080"
                      className="nut-uploader-preview-img-file-del"
                      onClick={() => onDeleteItem(item, index)}
                    />
                  )}
                </View>
              )}
            </View>
          )
        })}
    </>
  )
}
